module.exports = (sequelize, dataTypes) => {

    let alias = 'Category'; 

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
    };

    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Category = sequelize.define(alias,cols,config);

    Category.associate = function (models) {
        Category.hasMany(models.Product, { 
            as: "Product",
            foreignKey: 'category_id'
        })
    }      

    /*Category.associate = function (models) {
        Category.belongsToMany(models.Movie, { // models.Movie -> Movies es el valor de alias en Movie.js
            as: "Movie",
            through: 'characters_has_movies',
            foreignKey: 'characters_id',
            otherKey: 'movies_id',
            timestamps: false,
            onDelete: 'cascade'
        })*/
    

    return Category
};