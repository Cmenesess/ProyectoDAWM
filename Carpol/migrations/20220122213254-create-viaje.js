'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('viajes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idChofer: {
        type: Sequelize.STRING,
        references: { 
          model: 'choferes',
          key: 'id'
        }
      },
      hora_salida: {
        type: Sequelize.TIME
      },
      estado: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('viajes');
  }
};