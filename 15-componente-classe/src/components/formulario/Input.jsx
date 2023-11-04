import React from "react";
import { useState } from "react";

export default props => {

    // definimos um estado    estado inicial
    const [valor, setValor] = useState('')

    // quando tenho um componente controlado se eu tentar mudar, ele não vai alterar o seu valor se eu não chamar o "setValor"
    // não conseguimos mudar o estado do componente diretamente a partir da interface
    // primeiro mudamos o estado para só depois refletir essa mudança na interface

    function atualizaValor(e) {
        setValor(e.target.value)
    }
    return (
        <div>

            <h2>Digite: {valor}</h2>
            {/* componente controlado */}
            <input placeholder="Componente controlado" value={valor} onChange={atualizaValor} type="text" />
            <input placeholder="Não controlado" value={undefined} type="text" />

        </div>
    )
}