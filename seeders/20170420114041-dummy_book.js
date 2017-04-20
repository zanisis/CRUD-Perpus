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

    return queryInterface.bulkInsert('Books', [{
      title: 'Travel',
      desc: 'Kkoekfoakefoaewvnoeauiv fainoienc wcnawncuewi aenfuoc',
      photo: 'AAA',
      stock: 5
    },
    {
      title: 'China Town',
      desc: 'Lorem Ipsum Dolor SIt Amet',
      photo: 'BBB',
      stock: 8
    },
    {
      title: 'Indonesia Merdeka',
      desc: 'Indonesia merdeka di tahun 1975',
      photo: 'CCC',
      stock: 10
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
