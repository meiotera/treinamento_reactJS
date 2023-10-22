import './Card.css'
import React from "react";

export default function Card(props) {
    const estilos = {
        backgroundColor: props.color || '#00F',
        borderColor: props.color || '#00F'
    }

    return (
        <div className='card' style={estilos}>
            <div className='title'>
                {props.titulo}
            </div>
            <div className='content'>
                {props.children}
            </div>
        </div>
    )
}

