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
      photo: 'http://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20(37).jpg',
      stock: 5
    },
    {
      title: 'China Town',
      desc: 'Lorem Ipsum Dolor SIt Amet',
      photo: 'http://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20(21).jpg',
      stock: 8
    },
    {
      title: 'Indonesia Merdeka',
      desc: 'Indonesia merdeka di tahun 1975',
      photo: 'http://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20(12).jpg',
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
