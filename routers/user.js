let router=require('express').Router();
var path=require('path');
let multer=require('multer');
let auth =require("../controllers/auth")

router.post("/Login",auth.Login);
router.post("/Signin",auth.Signin);


module.exports=router;