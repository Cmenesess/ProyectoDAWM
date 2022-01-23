'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class viaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  viaje.init({
    idChofer: DataTypes.STRING,
    hora_salida: DataTypes.TIME,
    estado: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'viaje',
  });
  return viaje;
};