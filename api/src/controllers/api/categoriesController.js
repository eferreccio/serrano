const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
//const { Op } = require("sequelize");
const Op = db.Sequelize.Op;
//const moment = require('moment');

const categoriesController = {
    'list': (req, res) => { 
        db.Category.findAll()
       .then(categories => { 
           let listCategories = [];
           categories.map((category)=> {
               listCategories.push({name: category.name})
           })
           let response = {
            meta: {
                status : 200,
                total: categories.length,
                url: '/categories'
            },
            data: listCategories  
            }
            res.json(response);
        })
    },
    create: (req,res) => {
        
        db.Category
        .create(
            {
                name: req.body.name,
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url:'categories/create'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },/*
    update: (req,res) => {
        let movieId = req.params.id;
        console.log(movieId)
        console.log(req.body)
        db.Movie.update(
            {
                image: req.body.image,
                title: req.body.title,
                created_date: req.body.created_date,
                rating: req.body.rating,
                genre_id: req.body.genre_id
            },
            {
                where: {id: movieId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'movies/update/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'movies/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    destroy: (req, res) => {
        let movieId = req.params.id;
        console.log(movieId)
        db.Movie
        .destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(confirm => {
            let respuesta;
            console.log('confirm', confirm)
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'movies/delete/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'movies/destroy/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id,
            {
                include : ['genre', 'Character']
            })
            .then(movie => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: movie.length,
                        url: '/movie/:id'
                    },
                    data: movie
                }
                res.json(respuesta);
            });
    },
    search: (req, res) => {
        db.Movie.findAll({
            include: ['genre'],
            where: {
            // busca ya sea por el campo 'title' como por 'genre'
                [Op.or]: [

                    {title:        { [Op.like]: '%' + req.query.title + '%' }},
                    {genre_id:     { [Op.like]: '%' + req.query.genre + '%' }}
                ]
            },
            order: [
                ['created_date', 'DESC']
            ]
        })
        .then(movies => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: movies.length,
                    url: 'movies/search'
                },
                data: movies
            }
                res.json(respuesta);
        })
        .catch(error => console.log(error))
    }*/    
}

module.exports = categoriesController;