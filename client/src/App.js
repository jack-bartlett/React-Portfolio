import React from 'react';
// import Header from './components/Header.js';
// import Footer from './components/Footer.js';
// import Project from './components/Project.js';
// import AboutMe from './pages/AboutMe/AboutMe';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
// import Footer from './Footer';
// import Header from './components/Header';
import Navigation from './components/Navigation';
import Coding from './pages/Coding/Coding';
import Resume from './pages/Resume/Resume';
import Music from './pages/Music/Music';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';




// const App = () => <Project />;



export default function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/coding" element={< Coding/>} />
          <Route path="/music" element={< Music/>} />
          <Route path="/resume" element={< Resume/>} />
          <Route path="/contact" element={< Contact/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

