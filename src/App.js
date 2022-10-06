import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import './App.css';
import Destination from './components/Destination';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='destination' element={<Destination/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
