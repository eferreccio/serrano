const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
//const { Op } = require("sequelize");
const Op = db.Sequelize.Op;
const moment = require('moment');

const productsController = {
    list: (req, res) => {
        db.Product.findAll()
       .then(products => {
           let listProducts = [];
           products.map((product)=> {
               listProducts.push({name: product.name , desription: product.description , price: product.price })
           })
           let response = {
            meta: {
                status : 200,
                total: products.length,
                url: '/products'
            },
            data: listProducts  
            }
            res.json(response);
        })
    },
    detail: (req, res) => {
        db.Product.findByPk(req.params.id, {include: {association: "Category"} })
        
            .then(product=>{
                let response = {
                    meta: {
                        status: 200,
                        url: '/products/:id'
                    },
                    data: product
                }
                res.json(response);
            })      
    },
    create: (req,res) => {
        db.Product
        .create(
            {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                heigth: req.body.heigth,
                width: req.body.width,
                depth: req.body.depth,
                weigth: req.body.weigth,
                category_id: req.body.category_id
            }
        )
        .then(confirm => {
            let response;
            if(confirm){
                response ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'products/create'
                    },
                    data:confirm
                }
            }
            res.json(response);
        })    
        .catch(error => res.send(error))
    },
    update: (req,res) => {
        let productId = req.params.id;
        db.Product.update(
            {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                heigth: req.body.heigth,
                width: req.body.width,
                depth: req.body.depth,
                weigth: req.body.weigth,
                category_id: req.body.category_id
            },
            {
                where: {id: productId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                response ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'products/update/:id'
                    },
                    data:confirm
                }
            }else{
                response ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'products/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(response);
        })    
        .catch(error => res.send(error))
    },
    destroy: (req,res) => {
        let productId = req.params.id;
        db.Product
        .destroy({where: {id: productId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(confirm => {
            let response;
            if(confirm){
                response ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'products/delete/:id'
                    },
                    data:confirm
                }
            }else{
                response ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'products/:id'
                    },
                    data:confirm
                }
            }
            res.json(response);
        })    
        .catch(error => res.send(error))
    }, 
    search: (req, res) => {
    
        db.Product
            .findAll({
                where: {
                    // busca ya sea por el campo 'name' como por 'description'
                    [Op.or]: [
                      {name: { [Op.like]: '%' + req.query.name + '%' }},
                      {description:  { [Op.like]: '%' + req.query.description + '%' }}
                    ]
                }
            })
            .then(founded => {
                let resp;
                if(founded != ""){
                    resp ={
                        meta: {
                            status: 200,
                            url: 'products/search'
                        },
                        data:founded
                    }
                }else{
                    resp ={
                        meta: {
                            status: 204,
                            url: 'products/search'
                        },
                        data:founded
                    }
                }
                res.json(resp);
            })    
            .catch(error => res.send(error))       
    }   
}


module.exports = productsController;

