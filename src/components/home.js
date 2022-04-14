import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import Hina from '../hina.png'

function Home() {
    return(
        <header className="App-header" id="">
            <div>
                <ul>
                    <h2>Home</h2>
                    <li>
                        <Link to="#about" smooth>
                            About
                        </Link>    
                    </li>
                    <li>
                        <Link to="#contact" smooth>
                            Contact
                        </Link>  
                    </li>
                </ul>
            </div>
            <div>
                <img className="App-logo" src={Hina} alt="" />
            </div>
        </header>
    )
}

export default Home;