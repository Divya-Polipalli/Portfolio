import React from 'react'; 
import { Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
function App() {
   return (
    <div className="App">
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/skills" element={<Skills />} /> 
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </div>
  );
}

export default App;