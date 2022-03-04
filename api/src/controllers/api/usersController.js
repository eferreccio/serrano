const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const bcryptjs = require('bcryptjs');
const config = require('../../secret/config');
const sgMail = require('@sendgrid/mail');
const moment = require('moment');


const usersController = {

    list: (req, res) => {

        db.User.findAll()
        .then(users => {
            res.json(users)

        })

    },
    register: (req, res) => {
        const {name, phone, address, zip_code} = req.body;

        db.User.create({
            name: name,
            phone: phone,
            address: address,
            zip_code: zip_code,
            created_date: moment()
        })
        .then(confirm => {
            let response;
            if(confirm){
                response ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'users/register'
                    },
                    data:confirm
                }
            }
            res.json(response);
        })    
        .catch(error => res.send(error))

/*
            // ***** SENDING EMAIL ***** 

            const sgMail = require('@sendgrid/mail');

            const API_KEY = 'secreto';

            sgMail.setApiKey(API_KEY);

            const msg = {
                to: req.body.email,
                from: {
                    name: "apiDisney",
                    email:"estebanferreccio@gmail.com"
                },
                subject: "Welcome to apiDisney",
                text: "Thanks for signing up!",
                html: "<div><h2>Hi "+req.body.name+"!! Thanks for signing up!</h2><p>You can find your favorite movie and character of Disney.</p><p>Enjoy it!!!</p></div>" 
            };

            sgMail.send(msg)
                .then(() => {
                    console.log('Email sent')
                })
                .catch((error) => {
                    console.error(error)
                })

            // ***** END SEND EMAIL ***** */
        
    },
    login: (req, res) => {
        
        db.User.findAll()
            .then(users => {

                function findByField(field, text) {
            
                    let userFound = users.find(oneUser => oneUser[field] === text);
                    return userFound; 
                }
                
                let userToLogin = findByField('email', req.body.email);
                let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
                             
            })      
    }
}

module.exports = usersController;