import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { useTable } from '../../hooks/useTable';
import Pagination from '../pagination/Pagination';
import './postTable.css';

const PAGE_SIZE = 10;

function PostTable() {
  const [searchParams] = useSearchParams();
  const posts = useSelector((state) => state.posts.posts);
  const startPage = useMemo(() => {
    const DEFAULT_START_PAGE = 1;
    return searchParams.get('page') || DEFAULT_START_PAGE;
  }, [searchParams]);
  const {
    sort,
    sortedData,
    page,
    searchString,
    setSearchString,
    filter,
    totalRows,
  } = useTable(startPage, PAGE_SIZE, posts);

  return (
    <div>
      <div className="search">
        <input className="search-input" value={searchString} onChange={(e) => setSearchString(e.target.value)} type="text" />
        <button className="search-button" onClick={filter} type="button">Search</button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => sort('id')}>ID</th>
            <th onClick={() => sort('title')}>Заголовок</th>
            <th onClick={() => sort('body')}>Описание</th>
          </tr>
        </thead>
        <tbody>
          {sortedData?.map((post) => (
            <tr key={post.id}>
              <th>{post.id}</th>
              <th>{post.title}</th>
              <th>{post.body}</th>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        postsPerPage={PAGE_SIZE}
        currentPage={page}
        totalRows={totalRows}
      />
    </div>
  );
}

export default PostTable;
