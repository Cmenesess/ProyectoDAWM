var express = require('express');
var router = express.Router();

let bd = {
'usuario': 'abc',
'contrasenia': '123'
}

var auth = function(req, res, next) {
   if (req.session && req.session.usuario === bd['usuario'])
     return next();
   else
     return res.sendStatus(401);
};
router.get('/', auth, function(req, res, next) {
  let usuario = req.cookies.usuario;
});
module.exports = router;
