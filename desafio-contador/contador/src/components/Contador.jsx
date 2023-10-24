import React, { useState } from "react";
import Button from "./Button";

export default (props) => {

    let [numero, setNumero] = useState(0);

    function count() {
        setNumero(numero + 1);
    }

    return (
        <div>
            <p>Contando: {numero}</p>
            <Button passarFun={count}></Button>
        </div>
    );
}