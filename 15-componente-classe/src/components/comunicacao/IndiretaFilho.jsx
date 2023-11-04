import React from "react";

export default (props) => {
  const evento = props.chamaFun;

  return (
    <div>
      <div>Filho</div>

      <button
        onClick={() => {
          evento("Roberto", 31, true);
        }}
      >
        Fornecer Informações
      </button>
    </div>
  );
};
