var express = require('express');
var router = express.Router();
const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init_models");
var models = initModels(sequelize); 
let app = express();

app.use(express.json());

myusername = "abc"
mypassword = "123"


var session;
router.post('/',(req,res) => {
    models.usuario.findOne({
        where: {
            username:req.body.username,
            contraseña:req.body.password
        }
    }).then(function(users){
        if(!users){
            res.json({
                success: false,
                message:"Ponga un usurio valido"+req.body.username+req.body.password
            })
        }else{
            res.cookie('usuario',req.body.username , {expire : new Date() + 9999});
            session=req.session;
            session.userid=req.body.username;
            res.json({
                success: true ,
                message:"Bienvenido de nuevo "+req.body.username
            })
        }
    })
})

module.exports = router;