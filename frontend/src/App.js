import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home.js';
import ListHotel from './Pages/LISTHotel/ListHotel';
import Hotel from './Pages/Hotel/Hotel';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<ListHotel />} />
        <Route path='/hotels/:id' element={<Hotel/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
