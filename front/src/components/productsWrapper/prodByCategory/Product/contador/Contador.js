import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import './Contador.css';

class Contador extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            numero: props.inicial
        }
    }

    incrementar() {
        this.setState( { numero: this.state.numero + 1 })
    }

    decrementar() {
        this.setState( { numero: this.state.numero - 1 })
    }

    componentDidMount() {
        console.log("Me monté!!");
    }

    componentDidUpdate() {
        console.log("Me actualicé!!");
    }
    
    render() { 
        return(
            <div className="main-contador">
                <li><p> { this.state.numero } </p></li>
                <li><button onClick={ () => this.incrementar() }>+</button></li>
                <li><button onClick={ () => this.decrementar() }>-</button></li>                    
            </div>
        );
    }
}



export default Contador;