'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'city', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('users', 'clinic', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'city');
    await queryInterface.removeColumn('users', 'clinic');
  }
};
