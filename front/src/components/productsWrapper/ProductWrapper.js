import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductByCategory from './prodByCategory/ProductByCategory'

class ProductWrapper extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            cat: ""
        }
    }

    componentDidMount() {
        fetch("http://localhost:3031/categories/")
            .then( response => response.json())
            .then( data => {this.setState({cat: data.data})})
            .catch( error => console.log(error))
    }
    
    render() { 

        let contenido;
        let categories = [];

        if (this.state.cat == "") {
            contenido = <p>Cargando...</p>
        } else {

            contenido = this.state.cat

            

            contenido.map(function(cat){
                return categories.push(cat)
            })
        }

        return(
            <div>
                {categories.map(function(x){ return <ProductByCategory category={x.name} />})}  
            </div>            
        );
    }
}



export default ProductWrapper;



/*
import React from 'react'
import ProductByCategory from './prodByCategory/ProductByCategory'

const ProductWrapper = () => {
    return (
        <div>
            <ProductByCategory category="Picadas"/>
            <ProductByCategory category="Cervezas" />
            <ProductByCategory category="Quesos"/>         
        </div>
    )
}

export default ProductWrapper*/