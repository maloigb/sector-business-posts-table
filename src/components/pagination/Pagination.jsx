import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './pagination.css';

function Pagination({
  // eslint-disable-next-line react/prop-types
  postsPerPage, currentPage, totalRows,
}) {
  const totalPages = useMemo(() => Math.ceil(totalRows / postsPerPage), [currentPage, totalRows]);
  const [activePage, setActivePage] = useState(1);
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
    <div className="container-pagination">
      <div className="switch">
        {hasPrevPage && <Link onClick={() => setActivePage(activePage - 1)} to={`?page=${currentPage - 1}`}>Назад</Link>}
      </div>
      <div className="pagination-pages">
        <ul>
          {
          pages?.map((pageNumber) => (
            <li className="page-item" key={pageNumber}>
              <Link onClick={() => setActivePage(pageNumber)} className={activePage === pageNumber ? 'pages-link-active' : 'pages-link'} to={`?page=${pageNumber}`}>{pageNumber}</Link>
            </li>
          ))
        }
        </ul>
      </div>
      <div className="switch">
        {hasNextPage && <Link onClick={() => setActivePage(activePage + 1)} to={`?page=${currentPage + 1}`}>Далее</Link>}
      </div>
    </div>
  );
}

export default Pagination;
