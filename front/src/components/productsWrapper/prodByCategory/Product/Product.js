import React, { Component } from 'react';
import Contador from './contador/Contador'
import './Product.css';


class Product extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            prod: ""
        }
    }

    componentDidMount() {
        fetch("http://localhost:3031/products")
            .then( response => response.json())
            .then( data => {this.setState({prod: data.data})})
            .catch( error => console.log(error))
    }
    
    render() { 

        let contenido;
        let products = [];

        if (this.state.prod == "") {
            contenido = <p>Cargando...</p>
        } else {

            contenido = this.state.prod

            

            contenido.map(function(pr){
                return products.push(pr)
            })
        }

        return(
            <div className="main-product">
                {products.map(function(x, i){ return <ul className="product-line"><img className="img-prod" src={x.image}/><li key= { x + i}>{x.name}</li><p>${x.price}</p>< Contador  inicial= {0} /></ul> })}               
            </div>            
        );
    }
}



export default Product;

/*

function Product(props) {



    return (
        <div className="main-product">
            <h6>SOY UN PRODUCTO X </h6>
            < Contador  inicial= {0} />                       
        </div>
    )
}

export default Product */