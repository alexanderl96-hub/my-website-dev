import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/index'
import Contactar from './Pages/Contactme'
import Infomore from './Pages/Aboutmore'
// import SkillsMore from './Pages/Skills'
import ProjectsMore from './Pages/Projects'
import Product1 from './Components/Projects/Product/Traveling'
import Product2 from './Components/Projects/Product/Snowman'
import Product3 from './Components/Projects/Product/Wellness'
import Product4 from './Components/Projects/Product//ToyStore'
import Product5 from './Components/Projects/Product/CodeClear'
import Product6 from './Components/Projects/Product/Calculator'


function App() {
  return (
    <Router>
      <Routes>
         <Route path='/'  element={<Home/>} exact />
         <Route path='/contact'  element={<Contactar/>} exact />
         <Route path='/aboutmore'  element={<Infomore/>} exact />
         {/* <Route path='/skillsmore'  element={<SkillsMore/>} exact /> */}
         <Route path='/projectsmore'  element={<ProjectsMore/>} exact />
         <Route path='/traveling'  element={<Product1/>} exact />
         <Route path='/snowman'  element={<Product2/>} exact />
         <Route path='/wellness'  element={<Product3/>} exact />
         <Route path='/toystore'  element={<Product4/>} exact />
         <Route path='/codeclear'  element={<Product5/>} exact />
         <Route path='/calculator'  element={<Product6/>} exact />

      </Routes>
    </Router>
  );
}

export default App;
