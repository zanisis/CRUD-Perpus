'use strict';
module.exports = function(sequelize, DataTypes) {
  var BookUser = sequelize.define('BookUser', {
    BookId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        BookUser.belongsTo(models.Book)
        BookUser.belongsTo(models.User)
      }
    }
  });
  return BookUser;
};