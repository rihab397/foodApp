const { json } = require('express');
var express=require('express');
var mongoose =require('mongoose');
var app=express();
const path =require('path');
const fs = require('fs');
const fu=require('express-fileupload');
app.use('/images',express.static('images'));
require('dotenv').config();
var hbs = require('hbs');
app.set('view engine', 'hbs');
var PORT = 4000;
//  process.env.PORT || 1337 ||5000 ||2000
app.set('views', path.join(__dirname, 'views/'));
// var wpm=require('wpm');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


var mail=require('nodemailer');
var data=mail.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth:{
        user:"porwalrishab49@gmail.com",
        pass:"rishab890"
    }
})

var rand=Math.floor(Math.random()*10000)+00000;





app.get('/mail',async(req,res)=>{
    res.render('mailsend');
    });
    

    app.get('/sendmail',async(req,res)=>{
        // console.log(req.headers)
        data.sendMail({
            from:"porwalrishab49@gmail.com",
            to:req.headers.add,
            subject:req.headers.titl,
            text:req.headers.desc
        },(err,info)=>{
        if(err){
            console.log(err)
        }
        else if(info){
            console.log('you email successfully send')
        }
        })
        res.send(JSON.stringify({success:"mail send"}));
        });
        

    
app.listen(PORT,()=>{
    console.log('server is running on '+PORT);
})