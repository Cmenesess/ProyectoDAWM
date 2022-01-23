var express = require('express');
var router = express.Router();

const sequelize = require('../models/index').sequelize;
var initModels = require("../models/init_models");
var models = initModels(sequelize);

router.get('/', function(req, res, next) {
    res.send("API")
});

router.get('/pasajeros', function(req, res, next) {
  models.pasajero.findAll({ 
    attributes: { exclude: ["updatedAt", "createdAt"] }
  })
  .then(pasajero => {
     res.send(pasajero)
  })
  .catch(error => res.status(400).send(error))
});

router.get('/viajes', function(req, res, next) {
    models.viaje.findAll({ 
      attributes: ["createdAt"]
    })
    .then(viaje => {
       res.send(viaje)
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;
