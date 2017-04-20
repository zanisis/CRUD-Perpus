'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('BookUsers', [{
      BookId:1,
      UserId:2
    },
    {
      BookId:1,
      UserId:3
    },
    {
      BookId:2,
      UserId:3
    },
    {
      BookId:3,
      UserId:1
    },
    {
      BookId:3,
      UserId:2
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
