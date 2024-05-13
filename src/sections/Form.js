import React, { useState } from "react";
import './Form.css';
import Button from "../components/Button";


const Form = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensage, setMensage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Nome:', nome);
        console.log('Email', email);
        console.log('Mensage', mensage);

        setNome ('');
        setEmail ('');
        setMensage ('');
    };

    
    return(
        <section className="FormSection">
            <div className="FormContainer content">
                <div className="FormLeft">
                    <h2>Entre em contato pelo formulário</h2>
                </div>

                <div className="FormRight">
                    <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="nome">Nome</label>
                                <input
                                type="text"
                                id="nome"
                                value={nome}
                                onChange={(event) => setNome(event.target.value)}
                                required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                                />
                            </div>
                            <div>
                                <label htmlFor="mensage">Mensagem</label>
                                <textarea className="inputtextarea"
                                type="textarea"
                                id="mensage"
                                value={mensage}
                                onChange={(event) => setMensage(event.target.value)}
                                required
                                />  
                            </div>
                            <div className="btnSubmit">
                                <a><Button style="primary" type="submit">Enviar</Button></a>
                            </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Form;