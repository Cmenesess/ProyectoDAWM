var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  models.productos.findAll({ 
    attributes: { exclude: ["updatedAt"] }
  })
  .then(productos => {
     res.send(productos)
  })
  .catch(error => res.status(400).send(error))
});

module.exports = router;
