import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/index'
import Contactar from './Pages/Contactme'

function App() {
  return (
    <Router>
      <Routes>
         <Route path='/'  element={<Home/>} exact />
         <Route path='/contact'  element={<Contactar/>} exact />

      </Routes>
    </Router>
  );
}

export default App;
