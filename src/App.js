import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
