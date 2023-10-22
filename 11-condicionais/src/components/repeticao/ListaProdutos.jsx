import React from "react";
import produtos from "../../data/produtos";

export default () => {
  const listaProdutos = produtos.map((produto, i) => {
    let preco = produto.valor.toFixed(2).toString().replace(".", ",");
    return (
      <tr key={produto.id} className={i % 2 === 0 ? 'par' : 'impar'}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {preco}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr className="titulos">
          <th>ID</th>
          <th>Produto</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>{listaProdutos}</tbody>
    </table>
  );
};
