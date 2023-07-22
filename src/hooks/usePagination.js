import { useState, useMemo } from 'react';

export default (data, currentPage, pageSize) => {
  const [page] = useState(currentPage);
  const copyPosts = [...data];
  const paginatedData = useMemo(
    () => copyPosts.slice((page * pageSize - pageSize), (page * pageSize - 1)),
    [data],
  );

  return {
    paginatedData,
  };
};
