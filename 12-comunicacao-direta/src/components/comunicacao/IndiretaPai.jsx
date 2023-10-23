import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {

    function passarInfo(nome, idade, nerd) {
        console.log(nome, idade, nerd)
    }


    return (
        <div>
            <div>Pai</div>
            <IndiretaFilho chamaFun={passarInfo}/>
        </div>
    )
}