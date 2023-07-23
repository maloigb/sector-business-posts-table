/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './store/slices/postSlice';
import Table from './components/Table/PostTable';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="container">
      <Table />
    </div>
  );
}

export default App;
