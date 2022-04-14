import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import Hina from '../hina.png'

function Contact() {
    return(
        <section className="App-header" id="contact">
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
                    <li>
                        <Link to="#about" smooth>
                            About
                        </Link>    
                    </li>
                    <h2>Contact</h2>
                </ul>
            </div>
        </section>
    )
}

export default Contact;