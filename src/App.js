import React ,{useState, createContext} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home";
import About from './components/about';
import ImageRandomizer from './components/image-randomizer'
import RaidLog from './components/raid-log'

import './App.css'

export const authContext = createContext(null);

function App() {
  const [user, setUser] = useState();
  return (
    <authContext.Provider value={{user, setUser}}>
      <Router>
        <div>
          <Home />
          <About />
          <ImageRandomizer />
          {
              user ? (
                <RaidLog />
              ) : (
                <></>
              )
          }
        </div>
      </Router>
    </authContext.Provider>
  );
}

export default App;
