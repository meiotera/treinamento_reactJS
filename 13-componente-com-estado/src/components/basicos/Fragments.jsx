import React from "react";

export default function Fragments(props) {
    return (

        // Posso usar <> sem React.Fragment, mas assim não consigo passar propeiedades
        // Usando fragments os componentes ficam soltos no BODY
        <React.Fragment key="1">
            <h2>Com Fragment</h2>
            <p>Componentes soltos</p>
        </React.Fragment>


    )

}