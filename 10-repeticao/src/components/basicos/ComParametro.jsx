import React from "react"

export default function ComParametro(props) {

    // Recebendo os parametros em forma de objeto
    return (
        <div>
            <h2>Nome: {props.nome}</h2>
            <h3>Profissão {props.profissao}</h3>
            <p>Salário {props.salario}</p>
        </div>
    )
}