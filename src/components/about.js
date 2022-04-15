import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import HinaMuter from "./hina";

function About() {
    return(
        <section className="App-header" id="about">
            <div>
                <div>
                    <HinaMuter gambar='hoshino' />
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
                <p>We are part of Happy Trigger Blue Archive "E-Sport" division</p>
                <p>Come visit our main circle in <a href='https://happytrigger.net' target="_blank" rel="noreferrer" >https://happytrigger.net</a> </p>
            </div>
        </section>
    )
}

export default About;