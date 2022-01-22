'use strict';
const {
  Model, INET, INTEGER
} = require('sequelize');
const chofer_pasajero = require('./chofer_pasajero');
module.exports = (sequelize, DataTypes) => {
  class chofer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  chofer.init({
    id:{
      type:DataTypes.STRING,
      primaryKey: true
    },
    latitud: DataTypes.INTEGER,
    longitud: DataTypes.INTEGER,
    max_asientos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'chofer',
    tableName: 'choferes'
  });
  return chofer;
};