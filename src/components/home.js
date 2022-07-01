import React, {useContext} from "react";
import { HashLink as Link } from "react-router-hash-link";
import Login from './login.js'

import Muter from "./image";

import { authContext } from '../App.js';

function Home() {
    const auth = useContext(authContext);
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
            </div>
            <div>
                <Muter gambar='Tsurugi' />
                <div style={
                {
                    display:'flex', 
                    flexDirection:'column', 
                    justifyContent:'center', 
                    alignItems:'center', 
                    paddingTop: 100
                }}>
                
                </div>
                <Login />
            </div>
        </header>
    )
}

export default Home;