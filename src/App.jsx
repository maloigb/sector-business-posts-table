import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './store/slices/postSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
}

export default App;
