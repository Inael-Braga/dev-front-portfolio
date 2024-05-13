import React from "react";
import './About.css';
import Button from "../components/Button";
import Aboutimage from "../components/Aboutimage";
import { Link } from "react-router-dom";

const About = () => {
    return(
        <section className="About">
            <div className="aboutContent content">
                <div className="aboutLeft">
                    <h2>Olá, sou o Braga, desenvolvedor front-end em ascensão.</h2>
                    <p>Com uma bagagem sólida em design, HTML e CSS, estou trilhando meu caminho no mundo da programação, explorando as maravilhas do JavaScript e do React.</p>
                    <Button style="primary"><a><Link to="/sobre">Resume CV</Link></a></Button>
                </div>
                <div className="aboutRight">
                    <Aboutimage />
                </div>
            </div>
        </section>
    );
}
export default About;