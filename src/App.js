
import './App.css';

import About from './Component/About/About';
import Navber from './Component/Navber/Navber'
import Contect from './Component/Contect/Contect';
import Hero from './Component/Hero/Hero';
import Skille from './Component/Skille/Skille';
import Hireme from './Component/Hireme/Hireme';
import Project from './Component/Project/Project';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <>
      <Navber></Navber>
      <Hero></Hero>
      <About></About>
      <Skille></Skille>
      <Hireme></Hireme>
      <Project></Project>
      <Contect></Contect>
      <Footer></Footer>

    </>
  );
}

export default App;
