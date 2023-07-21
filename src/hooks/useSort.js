import { useState } from 'react';

export default (data) => {
  const [sortConfig, setSortConfig] = useState({
    fieldSort: '',
    directionSort: true,
  });
  const changeSort = (field) => {
    if (field === sortConfig.fielddSort) {
      setSortConfig({ ...sortConfig, directionSort: !sortConfig.directionSort });
    } else {
      setSortConfig({ ...sortConfig, fieldSort: field, directionSort: true });
    }
  };
  const sort = (field) => {
    changeSort(field);
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      if (sortConfig.directionSort) {
        return a[field].localeCompare(b[field]);
      }
      return b[field].localeCompare(a[field]);
    });
    return sortedData;
  };
  return {
    sortConfig,
    sort,
  };
};
