var express = require('express');
var router = express.Router();
const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init_models");
var models = initModels(sequelize); 
let app = express();

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.chofer.findAll({ 
    include:[{model:models.usuario}],
    attributes: { exclude: ["updatedAt","createdAt"] }
  })
  .then(choferes => {
     res.send(choferes)
  })
  .catch(error => res.status(400).send(error))
});

module.exports = router;
