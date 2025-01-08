import {Routes, Route} from 'react-router'
import MovieList from './pages/MovieList'
import Whishlist from './pages/Whishlist'
import Navbar from './components/Navbar';
import './App.css';
import MovieDetail from './pages/MovieDetail';
import WhishListProvider from './context/WhishListProvider';

function App() {

  return (
    <WhishListProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/whishlist" element={<Whishlist />} />
      </Routes>
    </WhishListProvider>
    
  );
}

export default App
