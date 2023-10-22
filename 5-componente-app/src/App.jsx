import React from "react";

// importando compoenete
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragments from './components/basicos/Fragments';


export default () => (
    <div>
        <Fragments></Fragments>

        {/* Passando parametros para o componente */}
        <ComParametro nome="Renan" profissao="Técnico" salario={1998.56}></ComParametro>
        <Primeiro></Primeiro>
    </div>
)

