'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.chofer);
      this.hasOne(models.pasajero);
    }
  }
  usuario.init({
    username:{
      type:DataTypes.STRING,
      primaryKey:true
    } ,
    contraseña: DataTypes.STRING,
    nombre: DataTypes.STRING,
    foto: DataTypes.STRING,
    rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuario',
    tableName: 'usuarios'
  });
  usuario.associate = models => {usuario.hasOne(models.chofer)};
  return usuario;
};