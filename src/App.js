
import './App.css';

import About from './Component/About/About';
import Navber from './Component/Navber/Navber'
// import Bot from './Component/Bot/Bot';
import Hero from './Component/Hero/Hero';
import Skille from './Component/Skille/Skille';
import Hireme from './Component/Hireme/Hireme';
import Project from './Component/Project/Project';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <>
      <Navber></Navber>
      {/* <Bot></Bot> */}
      <Hero></Hero>
      <About></About>
      <Skille></Skille>
      <Hireme></Hireme>
      <Project></Project>
      <Footer></Footer>

    </>
  );
}

export default App;
