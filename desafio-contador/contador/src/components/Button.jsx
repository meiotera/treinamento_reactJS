import React from "react";

export default (props) => {

    let count = props.passarFun;

    return (
        <button
            onClick={() => {
                count();
            }}
        >Mais um</button>
    )
}