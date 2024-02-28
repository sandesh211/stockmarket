import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sports from './pages/Sports';
import LoginWithClientCode from './pages/LoginWithClientCode';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Sports' element={<Sports />} />
          <Route path='/Login' element={<LoginWithClientCode />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
