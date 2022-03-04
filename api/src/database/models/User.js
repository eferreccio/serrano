module.exports = (sequelize, dataTypes) => {

    let alias = 'User'; 

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45), 
            allowNull: false
        },
        phone: {
            type: dataTypes.STRING(45), 
            allowNull: false
        },
        address: {
            type: dataTypes.STRING(100), 
            allowNull: false
        },
        zip_code: {
            type: dataTypes.STRING(10), 
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

    const User = sequelize.define(alias,cols,config);

    User.associate = function (models) {
        User.hasMany(models.Order, { 
            as: "Order",
            foreignKey: 'user_id'
        })
    }  

    return User
};