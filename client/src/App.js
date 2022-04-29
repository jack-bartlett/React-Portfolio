import React from 'react';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
// import Footer from './Footer';
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
          <Route exact path="/" element={< Home/>} />
          <Route exact path="/coding" element={< Coding/>} />
          <Route exact path="/music" element={< Music/>} />
          <Route exact path="/resume" element={< Resume/>} />
          <Route exact path="/contact" element={< Contact/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

