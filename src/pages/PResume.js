import React from 'react';
import './PResume.css';
import Aboutimage from '../components/Aboutimage';
import BadgeResume from '../components/Badgeresume';

const PResume = () => {
    

    return(
        <div className="Resume">
            <div className="ResumeContainer">
                <div className="ResumeTitle">
                    <h1>Resume CV</h1>
                    <span>Fortaleza - CE, Brasil</span>
                    <hr />
                </div>
                <div className='resumeTop'>
                    <div className="imageprof"><Aboutimage/></div>
                    <div>
                        <div className='nomeCargo'>
                        <h3>Inael Braga</h3>
                        <span>WEB  DESIGNER /FRONT END DEVELOPER</span>
                        </div>
                        <BadgeResume />
                    </div>
                </div>
            <div className='Sections'>
                <div className='sectionResume'> {/* Educacao */}
                        <h3>EDUCAÇÃO</h3>
                        <div className='sectionContainer'>
                            <div className='resumeSection'>
                                <h4>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</h4>
                                <span>UNASP - UNIVERSIDADE ADVENTISTA DE SÃO PAULO</span>
                                <p className='Badgeinf'>2023 - atual</p>
                                <hr/>
                            </div>
                            
                        </div>
                    </div>
                    <div className='sectionResume'> {/* Educacao */}
                        <h3>EXPERIÊNCIA</h3>
                        <div className='sectionContainer'>
                            <div className='resumeSection'>
                                <h4>DESIGNER DE INTERFACE</h4>
                                <span>ZARC TECH</span>
                                <p className='Badgeinf'>2023 - atual</p>
                                <hr/>
                            </div>
                            
                        </div>
                    </div>
            </div>


                
            </div>

        </div>
    );
}

export default PResume;