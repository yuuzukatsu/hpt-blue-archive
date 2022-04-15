import { Button } from "@mui/material";
import React,{useState} from "react";
import { HashLink as Link } from "react-router-hash-link";

import Muter from "./image";

function Home(props) {

    const [count, setCount] = useState({
        nama : "You",
        jum : 0
    });

    const klik = () => {
        setCount({
            ...count,
            jum : count.jum+1
        })
    }

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
                                <Link to="#image-randomizer" smooth>
                                    Image randomizer
                                </Link>  
                            </li>
                        </ul> 
                    </ul>
                </ul>    
            </div>
            <div>
                <Muter gambar='tsurugi' />
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', paddingTop: 100}}>
                    <p>{count.nama} clicked <span style={{color:"#db59e2"}}>{count.jum}</span> times!</p>
                    <Button variant="contained" color="secondary" onClick={klik}>Click!</Button>
                </div>
            </div>
        </header>
    )
}

export default Home;