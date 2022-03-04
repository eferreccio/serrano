const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const ordersController = {

    list: (req, res) => {

        db.Order.findAll({include: {association: "User"} })
        .then(orders => {
            res.json(orders)

        })

    },
    create: (req, res) => {

        db.Order
        .create(
            {
                detail: req.body.detail,
                created_date: req.body.created_date,
                user_id: req.body.user_id,
            }
        )
        .then(confirm => {
            let response;
            if(confirm){
                response ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'orders/create'
                    },
                    data:confirm
                }
            }
            res.json(response);
        })    
        .catch(error => res.send(error))
    }
}

module.exports = ordersController;