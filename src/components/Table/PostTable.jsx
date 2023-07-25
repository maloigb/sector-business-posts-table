/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { useTable } from '../../hooks/useTable';
import Pagination from '../pagination/Pagination';
import './postTable.css';
import Logo from './icons/Vector.svg';
import Arrow from './icons/Group.svg';

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
    <div className="page">
      <div className="search">
        <input placeholder="Поиск" className="search-input" value={searchString} onChange={(e) => setSearchString(e.target.value)} type="text" />
        <button className="search-button" onClick={filter} type="button">
          <img src={Logo} />
        </button>
      </div>
      <div className="container-table">
        <Table bsPrefix="test" striped bordered hover>
          <thead className="table-head">
            <tr className="table-head__row">
              <th
                className="table-head__column"
                onClick={() => sort('id')}
              >
                <div className="table-head__content-container">
                  <span>ID</span>
                  <img src={Arrow} />
                </div>
              </th>
              <th
                className="table-head__column"
                onClick={() => sort('title')}
              >
                <div className="table-head__content-container">
                  <span>
                    Заголовок
                  </span>
                  <img src={Arrow} />
                </div>
              </th>
              <th
                className="table-head__column"
                onClick={() => sort('body')}
              >
                <div className="table-head__content-container">
                  <span>Описание</span>
                  <img src={Arrow} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="table-body">
            {sortedData?.map((post) => (
              <tr
                key={post.id}
                className="table-body__row"
              >
                <td className="table-body__column">{post.id}</td>
                <td className="table-body__column">{post.title}</td>
                <td className="table-body__column">{post.body}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="pagination">
        <Pagination
          postsPerPage={PAGE_SIZE}
          currentPage={page}
          totalRows={totalRows}
        />
      </div>
    </div>
  );
}

export default PostTable;
