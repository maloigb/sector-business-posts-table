import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

function Pagination({
  // eslint-disable-next-line react/prop-types
  postsPerPage, currentPage, totalRows,
}) {
  const totalPages = useMemo(() => Math.ceil(totalRows / postsPerPage), [currentPage, totalRows]);

  const pages = useMemo(() => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i += 1) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }, [currentPage, totalPages]);
  const hasNextPage = useMemo(() => currentPage < totalPages, [currentPage, totalPages]);
  const hasPrevPage = useMemo(() => currentPage > 1, [currentPage]);
  return (
    <div>
      <ul className="pagination">
        {
          pages?.map((pageNumber) => (
            <li className="page-item" key={pageNumber}>
              <Link to={`?page=${pageNumber}`} style={{ marginLeft: '10px' }}>{pageNumber}</Link>
            </li>
          ))
        }
      </ul>
      {hasPrevPage && <Link to={`?page=${currentPage - 1}`}>Prev page</Link>}
      {hasNextPage && <Link to={`?page=${currentPage + 1}`}>Next page</Link>}
    </div>
  );
}

export default Pagination;
