import React from "react";

function Primeiro() {
    const msg = 'Seja bem vindo'
    const user = 'Renan'
    return (
        <div>
            <h2>Primeiro componente</h2>
            <p>{msg}, {user}</p>
        </div>
    )
}

export default Primeiro;