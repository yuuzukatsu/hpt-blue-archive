import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Button } from "@mui/material";

import Muter from "./image";

function ImageRandomizer() {
    const images = ['hina', 'tsurugi', 'hoshino']
    const [randomized, setRandomized] = useState('hina')
    const [result, setResult] = useState('hoshino')

    function looping() {
        const random = Math.floor(Math.random() * images.length)
        const loopResult = images[random]
        setResult(loopResult)
    }

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    const handleClick = () => {
        looping()
        setRandomized(result)
    }

    console.log(randomized);
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
                        </ul>
                    </ul>
                </ul>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center', height:525}}>
                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        Click to randomize image!
                    </Button>
                    <h4>Current image : <span style={{color:"#db59e2"}}>{capitalize(randomized)}</span></h4>
                </div>
            </div>
            <div>
                <Muter gambar={randomized}/>
            </div>
        </section>
    )
}

export default ImageRandomizer;