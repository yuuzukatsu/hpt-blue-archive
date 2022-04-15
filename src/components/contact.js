import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import HinaMuter from "./hina";

function Contact() {
    return(
        <section className="App-header" id="contact">
            <div style={{alignSelf: 'flex-start', justifySelf: 'left'}}>
                <ul>
                    <li>
                        <Link to="#" smooth>
                            Home
                        </Link>  
                    </li>
                    <ul>
                        <li>
                            <Link to="#about" smooth>
                                About
                            </Link>    
                        </li>
                        <ul>
                            <li>
                                <h3>Contact</h3>    
                            </li>
                        </ul>
                    </ul>
                </ul>
            </div>
            <div>
                <HinaMuter gambar='hina'/>
            </div>
        </section>
    )
}

export default Contact;