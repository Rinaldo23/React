import './App.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Pagination from './Components/Pagination';
import Favourites from './Components/Favourites';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/movies' element={
          <>
            <Banner />
            <Movies />
            <Pagination />
          </>
        } />

        <Route path='/favourites' element={<Favourites/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
