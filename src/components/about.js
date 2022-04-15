import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

import Muter from "./image";

function About() {
    return(
        <section className="App-header" id="about">
            <div>
                <div>
                    <Muter gambar='Hoshino' />
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
                                <Link to="#image-randomizer" smooth>
                                    Image randomizer
                                </Link>  
                            </li>
                        </ul>
                    </ul>
                </ul>
                <Container style={{paddingRight: 0}}>
                    <Card sx={{ bgcolor: "#2d2d2d", color: "background.default", p:2 }}>
                    <p>We are part of Happy Trigger Blue Archive "E-Sport" division</p>
                    <p>Come visit our main circle <a href='https://happytrigger.net' target="_blank" rel="noreferrer" style={{color:'#db59e2', fontWeight:'bold'}}>here</a> </p>    
                    </Card>
                </Container>
            </div>
        </section>
    )
}

export default About;