import React from "react";

// Comunicação direta é passada via props

export default (props) => {
  return (
    <div>
      <span>{props.nome} </span>
      <span>{props.idade} </span>
      <span>{props.nerd ? "Verdadeiro" : "Falso"}</span>
    </div>
  );
};
