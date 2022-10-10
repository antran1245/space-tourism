import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='destination' element={<Destination/>}/>
        <Route path='crew' element={<Crew/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
