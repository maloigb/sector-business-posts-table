import { useState, useMemo } from 'react';

export default (data, startPage, pageSize) => {
  const [page, setPage] = useState(startPage);
  const paginatedData = useMemo(
    () => data.slice((page * pageSize - pageSize), (page * pageSize)),
    [page, data],
  );
  return {
    paginatedData,
    page,
    setPage,
  };
};
