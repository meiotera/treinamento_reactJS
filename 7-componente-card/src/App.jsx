import './App.css'
import React from "react";

// importando compoenete
import Card from "./components/layout/Card";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragments from './components/basicos/Fragments';
import Aleatorio from "./components/basicos/Aleatorio";


export default () => (
    <div className='app'>
        <h1>Fundamentos React</h1>


        <div className="cards">
            <Card titulo="#04 - Desafio Aleatório" color="#0f0">
                <Aleatorio min={1} max={60}></Aleatorio>
            </Card>

            <Card titulo="#03 - Fragmento" color="#F98765">
                <Fragments></Fragments>
            </Card>

            <Card titulo="#02 - Passando parametro" color="#555">
                {/* Passando parametros para o componente */}
                <ComParametro nome="Renan" profissao="Técnico" salario={1998.56}></ComParametro>
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#a06172">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>
)

