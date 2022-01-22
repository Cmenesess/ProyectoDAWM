'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('choferes', {
      latitud: {
        type: Sequelize.FLOAT(8,6)
      },
      longitud: {
        type: Sequelize.DOUBLE(12,6)
      },
      max_asientos: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        references:{
          model:'usuarios',
          key:'username',
        },
        primaryKey: true,
        onDelete: 'CASCADE',
      },
    });
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('choferes');
  }
};