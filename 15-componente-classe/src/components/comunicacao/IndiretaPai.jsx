import React, { useState } from "react";
// com o useState conseguimos usar estados em nosso componentes

import IndiretaFilho from "./IndiretaFilho";

export default props => {
    // o useState retorna um array com duas posições
    // a primeira posição é o valor da variavel
    // a segunda é um função que é usada para alterar o valor inicial
    let [nome, setNome] = useState('?');
    let [idade, setIdade] = useState(0);
    let [nerd, setNerd] = useState(false)

    function passarInfo(nome, idade, nerd) {
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
    }


    return (
        <div>
            <div><span>{nome} - {idade} - {nerd ? 'Verdadeiro' : 'Falso'}</span></div>
            <IndiretaFilho chamaFun={passarInfo} />
        </div>
    )
}