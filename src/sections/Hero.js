import React from "react";
import './Hero.css';
import Button from "../components/Button";

const Hero = () => {
    return(
        <section className="heroContainer">
            <h1>Bem-vindo ao meu mundo digital!</h1>
            <Button style="primary">Meus trabalhos</Button>
        </section>
    );
}

export default Hero;