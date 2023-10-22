// importando css
import './index.css';
import ReactDOM from "react-dom";
// importando react
import React from "react";

// importando compoenete
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragments from './components/basicos/Fragments';

const el = document.getElementById('root');

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>

        {/* Passando parametros para o componente */}
        <ComParametro nome="Renan" profissao="Técnico" salario={1998.56}></ComParametro>
        <Fragments></Fragments>
    </div>,
    el
) 