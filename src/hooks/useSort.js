import { useState } from 'react';

export default () => {
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
  const compareStrings = (a, b, directionSort) => {
    if (directionSort) {
      return String(a).localeCompare(String(b));
    }
    return String(b).localeCompare(String(a));
  };

  const compareNumbers = (a, b, directionSort) => {
    if (directionSort) {
      return a - b;
    }
    return b - a;
  };

  const sortTypeConfig = {
    string: compareStrings,
    number: compareNumbers,
  };
  const sort = (field, data) => {
    changeSort(field);
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      const fieldType = typeof a[field];
      return sortTypeConfig[fieldType](a[field], b[field], sortConfig.directionSort);
    });
    return sortedData;
  };
  return {
    sortConfig,
    sort,
  };
};
