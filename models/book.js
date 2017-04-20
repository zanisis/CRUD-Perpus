'use strict';
module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    desc: DataTypes.TEXT,
    photo: DataTypes.TEXT,
    stock: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Book.hasMany(models.BookUser)
        Book.belongsToMany(models.User, {through:'BookUser'})
      }
    }
  });
  return Book;
};