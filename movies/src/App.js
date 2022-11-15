import './App.css';
import NavBar from './Components/NavBar';
import Movies from './Components/Movies';
import Favourites from './Components/Favourites';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <Movies /> */}
      <Routes>
        <Route path='/movies' element={<Movies />} />
        <Route path='/favourites' element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
