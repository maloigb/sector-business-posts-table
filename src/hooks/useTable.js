import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useSort from './useSort';
import usePagination from './usePagination';
// eslint-disable-next-line import/prefer-default-export
export const useTable = (startPage, pageSize, tableElements = []) => {
  const [searchString, setSearchString] = useState('');
  const [sortedData, setSortedData] = useState(tableElements);
  const [, setSearchParams] = useSearchParams();
  const { sort, sortConfig } = useSort(sortedData);
  const { paginatedData, page, setPage } = usePagination(sortedData, startPage, pageSize);
  const filter = () => {
    if (!searchString) {
      setSortedData(tableElements);
      return;
    }
    const filteredSortedData = sortedData.filter((element) => Object
      .values(element)
      .some((value) => String(value).includes(searchString)));
    setSortedData(filteredSortedData);
    setPage(1);
  };

  useEffect(() => {
    setSortedData(tableElements);
  }, [tableElements]);
  useEffect(() => {
    setSearchParams({ page });
  }, [page]);
  useEffect(() => {
    setPage(Number(startPage));
  }, [startPage]);
  return {
    sort: (field) => setSortedData(sort(field, tableElements)),
    sortConfig,
    sortedData: paginatedData,
    page,
    setPage,
    searchString,
    setSearchString,
    filter,
    totalRows: sortedData?.length,
  };
};
