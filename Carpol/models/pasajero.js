'use strict';
const {
  Model
} = require('sequelize');
const chofer_pasajero = require('./chofer_pasajero');
module.exports = (sequelize, DataTypes) => {
  class pasajero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
    }
  }

  pasajero.init({
    id:{
      type:DataTypes.STRING,
      primaryKey:true
    },
    latitud: DataTypes.INTEGER,
    longitud: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pasajero',
    tableName: 'pasajeros'
  });
  return pasajero;
};