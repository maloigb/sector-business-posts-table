import { useState, useEffect } from 'react';
import useSort from './useSort';

// eslint-disable-next-line import/prefer-default-export
export const useTable = (tableElements = []) => {
  const [sortedData, setSortedData] = useState(tableElements);
  const { sort, sortConfig } = useSort(sortedData);
  useEffect(() => {
    setSortedData(tableElements);
  }, [tableElements]);
  return {
    sort: (field) => setSortedData(sort(field)),
    sortConfig,
    sortedData,
  };
};
