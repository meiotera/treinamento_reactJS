import React from "react";

function Display(props) {

    const estilo = {
        border: '1px solid green',
        fontFamily: 'Helvetica',
        marginBottom: '10px',
        borderRadius: '10px'
    }


    return (
        <header style={estilo}>
            <p>Meu número: {props.numero}</p>
        </header>
    )
}

export default Display