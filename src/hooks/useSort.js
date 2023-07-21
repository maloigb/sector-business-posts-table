import { useState } from 'react';

export default (data) => {
  const [sortConfig, setSortConfig] = useState({
    fieldSort: '',
    directionSort: true,
  });
  const changeSort = (field) => {
    if (field === sortConfig.fieldSort) {
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
        return String(a[field]).localeCompare(String(b[field]));
      }
      return String(b[field]).localeCompare(String(a[field]));
    });
    return sortedData;
  };
  return {
    sortConfig,
    sort,
  };
};
