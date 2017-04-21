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
    return queryInterface.bulkInsert('Users', [{
      name: 'Oscar',
      email:'franky1790@gmail.com',
      photo: 'http://wallpapersdota2.com/wp-content/uploads/2014/08/dota2-wallpapers.seoplus.com_.ua-2.jpg'
    },
    {
      name: 'Zanny',
      email:'zanny@gmail.com',
      photo: 'http://wallpapersdota2.com/wp-content/uploads/2014/08/dota2-wallpapers.seoplus.com_.ua-2.jpg'
    },
    {
      name: 'Billy',
      email:'billy@yahoo.com',
      photo:'http://wallpapersdota2.com/wp-content/uploads/2014/08/dota2-wallpapers.seoplus.com_.ua-2.jpg'
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
