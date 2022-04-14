import { HashLink as Link } from "react-router-hash-link";

import Hina from '../hina.png'

function Home() {
    return(
        <header className="App-header" id="">
            <img className="App-logo" src={Hina} alt="" />
            <center>Home</center>
                <Link to="#about" smooth>
                    About
                </Link>
                <Link to="#contact" smooth>
                    Contact
                </Link>
        </header>
    )
}

export default Home;