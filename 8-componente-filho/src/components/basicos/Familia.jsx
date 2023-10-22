import React from "react";
import Membro from './FamiliaMembro'

export default props => {
    const sobre = props.sobrenome
    return (
        <div>
            <Membro nome="Rafael" sobrenome={sobre} />
            <Membro nome="Ana" {...props} />
            <Membro nome="Matheus" sobrenome="Ferreira" />
        </div>
    )
}