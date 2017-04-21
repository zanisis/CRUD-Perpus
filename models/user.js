'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    photo: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.BookUser)
        User.belongsToMany(models.Book, {through:'BookUser'})
      }
    }
  });
  return User;
};