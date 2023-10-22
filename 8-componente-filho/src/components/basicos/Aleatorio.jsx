import React from "react";

export default (props) => {
    let numeroAleatorio = Math.floor(Math.random() * (props.max - props.min + 1) + props.min);

    return (
        <div>
            <p>Número min: {props.min}</p>
            <p>Número max: {props.max}</p>
            <p>Número aleatótio: {numeroAleatorio}</p>
        </div>
    )
}

