import React from "react";
import './PWorks.css'; 
import CardWorks from "../components/CardWorks";
import Button from "../components/Button";
import { Link } from 'react-router-dom'

const PWorks = () => {
    return(
        <div className="Works">
            <div className="WorksContainer">
                <div className="WorksTitle">
                    <h1>Alguns dos projetos</h1>
                    <span>HTML, CSS, Js</span>
                    <hr />
                </div>
                <div>
                    <CardWorks />
                    <div className="ButtonContato">
                    <Button style="secondary"><Link to="/contato">Entrar em contato</Link></Button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default PWorks;