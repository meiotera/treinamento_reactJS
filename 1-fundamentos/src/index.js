// importando css
import './index.css';
import ReactDOM from "react-dom";
// importando react
import React from "react";


const el = document.getElementById('root')

const userName = 'Renan Ferreira';

ReactDOM.render(
    <div>
        <h1><strong>Olá React</strong></h1>

        <p>Olá você é o usuário {userName}</p>
    </div>,
    el
) 