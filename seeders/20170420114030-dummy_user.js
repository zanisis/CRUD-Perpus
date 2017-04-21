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
      photo:'http://www.gambarnaruto.com/wp-content/uploads/2016/03/32-Gambar-EarthShaker-Dota-2-Wallpaper-1.jpeg'
    },
    {
      name: 'Zanny',
      email:'zanny@gmail.com',
      photo: 'http://www.gambarnaruto.com/wp-content/uploads/2016/04/Gambar-Rikimaru-Dota-2-Wallpaper-3.jpg'
    },
    {
      name: 'Billy',
      email:'billy@yahoo.com',
      photo: 'http://www.gambarnaruto.com/wp-content/uploads/2016/04/20-Gambar-Tidehunter-Dota-2-Wallpaper-10.jpg'
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
