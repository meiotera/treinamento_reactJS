import React, { Component } from "react";
import Display from './Display';
import Botoes from './Botoes';
import InputPasso from './InputPasso'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.alterarPasso || 5
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    alterarPasso = (valor) => {
        this.setState({
            passo: valor
        })
    }

    render() {
        return (
            <div>
                <Display numero={this.state.numero} />
                <InputPasso passo={this.state.passo} setPasso={this.alterarPasso} />
                <Botoes incrementa={this.inc} decrementa={this.dec} />
            </div>
        )
    }
}

export default Contador;