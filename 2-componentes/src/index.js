// importando css
import './index.css';
import ReactDOM from "react-dom";
// importando react
import React from "react";

// importando compoenete
import Primeiro from './components/basicos/Primeiro';

const el = document.getElementById('root');

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
    </div>,
    el
) 