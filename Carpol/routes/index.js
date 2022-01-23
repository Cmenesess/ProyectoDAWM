var express = require('express');
var router = express.Router();
var multer  = require('multer');
const path=require('path');

const storage=multer.diskStorage({
  destination: path.join(__dirname,'images'),
  filename: (req,file,cb)=>{
    cb(null,file.originalname);
  }
});

const upload = multer({
  storage,
  dest: path.join(__dirname,'../images')
}).single('image');

router.post('/upload',upload,(req,res)=>{
  console.log(req.file)
})

module.exports=router;