import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { useTable } from '../../hooks/useTable';

function PostTable() {
  const posts = useSelector((state) => state.posts.posts);
  const { sort, sortedData } = useTable(posts);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th onClick={() => sort('id')}>ID</th>
          <th onClick={() => sort('title')}>Заголовок</th>
          <th onClick={() => sort('body')}>Описание</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.slice(0, 10).map((post) => (
          <tr key={post.id}>
            <th>{post.id}</th>
            <th>{post.title}</th>
            <th>{post.body}</th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default PostTable;
