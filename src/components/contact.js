import { HashLink as Link } from "react-router-hash-link";

function Contact() {
    return(
        <section className="App-header" id="contact">
            <Link to="#" smooth>
                Home
            </Link>
            <Link to="#about" smooth>
            About
          </Link>
            <center>Contact</center>
        </section>
    )
}

export default Contact;