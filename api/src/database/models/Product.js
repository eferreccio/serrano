module.exports = (sequelize, dataTypes) => {

    let alias = 'Product'; 

    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100), 
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        heigth: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        width: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        depth: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        weigth: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
    };

    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Product = sequelize.define(alias,cols,config);

    Product.associate = function (models) {
        Product.belongsTo(models.Category, { 
            as: "Category",
            foreignKey: 'category_id'
        })
    }       

    /*Product.associate = function (models) {
        Product.belongsToMany(models.Movie, { // models.Movie -> Movies es el valor de alias en Movie.js
            as: "Movie",
            through: 'characters_has_movies',
            foreignKey: 'characters_id',
            otherKey: 'movies_id',
            timestamps: false,
            onDelete: 'cascade'
        })*/
    

    return Product
};