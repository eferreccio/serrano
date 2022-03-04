module.exports = (sequelize, dataTypes) => {

    let alias = 'Order'; 

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        detail: {
            type: dataTypes.STRING(255), 
            allowNull: false
        },
        created_date: {
            type: dataTypes.DATE, 
            allowNull: false
        },
    };

    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Order = sequelize.define(alias,cols,config);

    Order.associate = function (models) {
        Order.belongsTo(models.User, { 
            as: "User",
            foreignKey: 'user_id'
        })
    }          

    return Order
};