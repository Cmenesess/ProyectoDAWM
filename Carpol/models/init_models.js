var DataTypes = require("sequelize").DataTypes;
var _chofer = require("./chofer");
var _pasajero = require("./pasajero");
var _usuario = require("./usuario");
var _chofer_pasajero = require("./chofer_pasajero");

function initModels(sequelize) {
  var usuario = _usuario(sequelize, DataTypes);
  var pasajero = _pasajero(sequelize, DataTypes);
  var chofer = _chofer(sequelize, DataTypes);
  var chofer_pasajero = _chofer_pasajero(sequelize, DataTypes);

  pasajero.belongsTo(usuario,{targetKey:'username',foreignKey:'id'})
  chofer.belongsTo(usuario,{targetKey:'username',foreignKey:'id'})

  chofer.belongsToMany(pasajero,{through:chofer_pasajero,foreignKey:'id'})
  pasajero.belongsToMany(chofer,{through:chofer_pasajero,foreignKey:'id'})


  return {
    usuario,
    pasajero,
    chofer,
    chofer_pasajero,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
