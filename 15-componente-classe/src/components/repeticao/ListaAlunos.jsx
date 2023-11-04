import React from "react";
import alunos from "../../data/alunos";

export default (props) => {
  const alunoJSX = alunos.map((aluno) => {
    let nota = aluno.nota.toString().replace(".", ",");
    return (
      <li key={aluno.id}>
        {aluno.nome} {"=>"} {nota}
      </li>
    );
  });

  return (
    <div>
      <ul>{alunoJSX}</ul>
    </div>
  );
};
