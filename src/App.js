import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
      <Navigation />
      <Routes>
        <Route path='/space-tourism/' element={<Home />} />
        <Route path='/space-tourism/destination' element={<Destination />} />
        <Route path='/space-tourism/crew' element={<Crew />} />
        <Route path='/space-tourism/technology' element={<Technology />} />
        <Route path="*" element={<Navigate to={'/space-tourism/'} replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
