import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import Hina from '../hina.png'

function About() {
    return(
        <section className="App-header" id="about">
            <div>
                <div>
                    <img className="App-logo" src={Hina} alt="" />
                </div>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="#" smooth>
                            Home
                        </Link>  
                    </li>
                    <h2>About</h2>
                    <li>
                        <Link to="#contact" smooth>
                            Contact
                        </Link>  
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About;