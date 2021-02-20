import React from 'react';
import styled from 'styled-components';
import header from './assets/imgheader.jpg'
import logoheader from './assets/logoheader.png'

import form from './assets/form.jpg'
import './section.css'

const Section = () => {
    return(
        <>
            <div className="flex-container">
                <img className="image"  src={header} alt=""/>
                <div class="hero-text">
                <img className="image"  src={logoheader} alt=""/>
                <p>Registra aquí tu transporte</p>
                
                </div>
        
            </div>
    </>
);
}

export default Section;
