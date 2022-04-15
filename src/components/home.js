import React,{useState} from "react";
import { HashLink as Link } from "react-router-hash-link";

import HinaMuter from "./hina";

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
                                <Link to="#contact" smooth>
                                    Contact
                                </Link>  
                            </li>
                        </ul> 
                    </ul>
                </ul>    
            </div>
            <div>
                <HinaMuter gambar='tsurugi' />
                <p>{count.nama} clicked {count.jum} times</p>
                <button onClick={klik}>Click</button>
            </div>
        </header>
    )
}

export default Home;