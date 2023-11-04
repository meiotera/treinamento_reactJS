import "./App.css";
import React from "react";

// importando compoenete
import Contador from "./components/contador/contador";

import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./condicional/UsuarioInfo";
import ParImpar from "./condicional/ParImpar";
import ListaProdutos from "./components/repeticao/ListaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia";
import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragments from "./components/basicos/Fragments";
import Aleatorio from "./components/basicos/Aleatorio";

export default () => (
  <div className="app">
    <h1>Fundamentos React</h1>

    <div className="cards">

      <Card titulo="#13 - Baseado em Classe" color="#42f123">
        <Contador />

      </Card>

      <Card titulo="#12 - Comunicação controlado - com estado" color="#345fd2">
        <Input />
      </Card>

      <Card titulo="#11 - Comunicação indireta" color="#9fFDE1">
        <IndiretaPai />
      </Card>

      <Card titulo="#10 - Comunicação direta" color="#4DE1">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#09 - Renderização Condicional" color="#345424">
        <ParImpar numero={23}></ParImpar>
        <UsuarioInfo usuario={{ nome: 'Eduardo' }}></UsuarioInfo>
        <UsuarioInfo usuario={{ iddade: 25 }}></UsuarioInfo>
      </Card>

      <Card titulo="#08 - Desafio Lista de Produtos" color="#F0F">
        <ListaProdutos></ListaProdutos>
      </Card>

      <Card titulo="#07 - Repetição" color="#ffaa99">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#06 - Componente com Filho / children" color="#f54f56">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Otavio" />
          <FamiliaMembro nome="Renan" />
          <FamiliaMembro nome="Maria" />
        </Familia>
      </Card>

      {/* <Card titulo="#05 - Componente com Filho" color="#f54f09">
                <Familia sobrenome="Silva"></Familia>
            </Card> */}

      <Card titulo="#04 - Desafio Aleatório" color="#0f0">
        <Aleatorio min={1} max={60}></Aleatorio>
      </Card>

      <Card titulo="#03 - Fragmento" color="#F98765">
        <Fragments></Fragments>
      </Card>

      <Card titulo="#02 - Passando parametro" color="#555">
        {/* Passando parametros para o componente */}
        <ComParametro
          nome="Renan"
          profissao="Técnico"
          salario={1998.56}
        ></ComParametro>
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#a06112">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
