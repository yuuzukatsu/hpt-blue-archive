import { HashLink as Link } from "react-router-hash-link";

function About() {
    return(
        <section className="App-header" id="about">
            <Link to="#" smooth>
                Home
            </Link>
            <center>About</center>
            <Link to="#contact" smooth>
                Contact
            </Link>
        </section>
    )
}

export default About;