import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import HinaMuter from "./hina";

function About() {
    return(
        <section className="App-header" id="about">
            <div>
                <div>
                    <HinaMuter />
                </div>
            </div>
            <div dir="RTL" style={{alignSelf: 'flex-start', justifySelf: 'right'}}>
                <ul>
                    <li>
                        <Link to="#" smooth>
                            Home
                        </Link>  
                    </li>
                    <ul>
                        <li>
                            <h3>About</h3>    
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
        </section>
    )
}

export default About;