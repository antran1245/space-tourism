import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='space-tourism/' element={<Home/>}/>
        <Route path='space-tourism/destination' element={<Destination/>}/>
        <Route path='space-tourism/crew' element={<Crew/>}/>
        <Route path='space-tourism/technology'  element={<Technology />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
