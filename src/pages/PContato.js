import React from "react";
import './PContato.css';
import Form from "../sections/Form";
import compcontact from "../assets/compcontact.png";

const PContato = () => {
    
    return(
        <div className="Contato">
            <div className="ContContainer">
                <div className="ContTitulo">
                    <h1>Fale comigo</h1>
                    <span>Para qualquer projeto</span>
                    <hr />
                </div>
                <div>
                    <Form />
                    <img src={compcontact}/>
                </div>
            </div>
        </div>
    );
}

export default PContato;