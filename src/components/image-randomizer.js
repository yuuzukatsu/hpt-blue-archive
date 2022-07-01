import React, { useState,useContext }  from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Button } from "@mui/material";

import Muter from "./image";

import { authContext } from '../App.js';

function ImageRandomizer() {
    const auth = useContext(authContext);
    const images = ['Hina', 'Tsurugi', 'Hoshino', 'Arona', 'Aru', 'Fuuka', 'Hifumi' ,'Momoi']
    const [randomized, setRandomized] = useState('Hina')
    const [wuzzWuzz, setRNG] = useState(Math.floor(Math.random() * 2))

    const randomImage = () => {
        const random = Math.floor(Math.random() * images.length)
        setRandomized(images[random])
        setRNG(Math.floor(Math.random() * 2))
    }

    //console.log(randomized);
    return(
        <section className="App-header" id="image-randomizer">
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
                                <h3>Image randomizer</h3>    
                            </li>
                            {
                                auth.user ? (
                                <ul>
                                    <li>
                                        <Link to="#raid-log" smooth>
                                            Raid Log
                                        </Link>  
                                    </li>
                                </ul>
                                ) : (
                                <></>
                                )
                            }
                        </ul>
                    </ul>
                </ul>
                <div style={
                {
                    display:'flex', 
                    flexDirection:'column', 
                    justifyContent:'center',
                    alignItems:'center', 
                    height:525
                }}>

                    <Button variant="contained" color="secondary" onClick={randomImage}>
                        Click to randomize image!
                    </Button>

                    <h4>Current image : <span style={{color:"#db59e2"}}>{randomized}</span></h4>
                </div>
            </div>
            <div>
                <Muter gambar={randomized} chance={wuzzWuzz}/>
            </div>
        </section>
    )
}

export default ImageRandomizer;