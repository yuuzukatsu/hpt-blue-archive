import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./components/home";
import About from './components/about';
import ImageRandomizer from './components/image-randomizer'

import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Home />
        <About />
        <ImageRandomizer />
      </div>
    </Router>
  );
}

export default App;
