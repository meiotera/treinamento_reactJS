import React from "react";

const Botoes = (props) => {

    const estilo = {
        borderRadius: '50%',
        backgroundColor: 'green',
        width: '40px',
        height: '40px',
        margin: '10px',
        cursor: 'pointer',
        fontSize: '20px',
        color: '#fff'
    }

    return (
        <section >
            <button style={estilo} onClick={props.decrementa}>-</button>
            <button style={estilo} onClick={props.incrementa}>+</button>
        </section>
    )
}

export default Botoes;