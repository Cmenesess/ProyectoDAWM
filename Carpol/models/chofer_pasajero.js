'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chofer_pasajero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.chofer);
      this.belongsTo(models.pasajero);
    }
  }
  chofer_pasajero.init({
    id_chofer: DataTypes.STRING,
    id_pasajero: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'chofer_pasajero',
    tableName: 'chofer_pasajeros'
  });
  return chofer_pasajero;
};