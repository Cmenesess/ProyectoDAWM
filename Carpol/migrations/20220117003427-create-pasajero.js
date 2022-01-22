'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pasajeros', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { 
            model: 'usuarios',
            key: 'username'
        },
        primaryKey: true,
        onDelete: 'CASCADE',
      },
      latitud: {
        type: Sequelize.FLOAT(8,6)
      },
      longitud: {
        type: Sequelize.DOUBLE(12,6)
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
    await queryInterface.dropTable('pasajeros');
  }
};