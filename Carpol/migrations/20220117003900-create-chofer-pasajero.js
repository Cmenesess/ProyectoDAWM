'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('chofer_pasajeros', {
      id_chofer: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { 
            model: 'choferes',
            key: 'id'
        },
      },
      id_pasajero: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { 
            model: 'pasajeros',
            key: 'id'
        },
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
        autoIncrement: true,
        type: Sequelize.INTEGER,
        unique:true,
      },
    })
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('chofer_pasajeros');
  }
};