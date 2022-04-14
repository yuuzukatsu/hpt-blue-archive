import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import HinaMuter from "./hina";

function Home() {
    return(
        <header className="App-header" id="">
            <div className="big-li">
                <ul>
                    <li>
                        <h3>Home</h3>
                    </li>
                    <ul>
                        <li>
                            <Link to="#about" smooth>
                                About
                            </Link>    
                        </li>
                        <ul>
                            <li>
                                <Link to="#contact" smooth>
                                    Contact
                                </Link>  
                            </li>
                        </ul> 
                    </ul>
                </ul>    
            </div>
            <div>
                <HinaMuter />
            </div>
        </header>
    )
}

export default Home;