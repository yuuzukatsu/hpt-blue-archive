import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import Home from "./components/home";
import About from './components/about';
import Contact from './components/contact'

import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Home />
        <About />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
