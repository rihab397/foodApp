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
app.set('views', path.join(__dirname, 'views/'));
// var wpm=require('wpm');

var PORT = 4000;


// process.env.PORT || 1337 ||5000 ||2000

// var mail=require('nodemailer');
// var data=mail.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     requireTLS: true,
//     auth:{
//         user:"porwalrishab49@gmail.com",
//         pass:"rishab890"
//     }
// })

var rand=Math.floor((Math.random()*10000)+0000);


app.get("/showinsert", (req,res)=>{
    // res.render("in");
    res.send("boy.html");
})

// data.sendMail({
//     from:"porwalrishab49@gmail.com",
//     to:"rishabporwal9@gmail.com",
//     subject:"hello rishab",
//     text:"hello rishan how are you"+rand
// },(err,info)=>{
// if(err){
//     console.log(err)
// }
// else if(info){
//     console.log('you email successfully send')
// }
// })


// app.use(fu());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });


//  mongoose.connect(process.env.MONGO_URL,{
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false
// })
// .then(()=>{
//    console.log("you are connected")
// })
// .catch((err)=>{
//     console.log(`not connected ${err}`)
// })



// var Table= mongoose.model('table',mongoose.Schema({
//     name:String,
//     roll:Number,
//     place:String
// }))

// var Tablesx= mongoose.model('foodtable5',mongoose.Schema({
//    food_id:Number,
//    food_name:String,
//    food_content:String,
//    food_prize:Number,
//    food_category:String,
//    food_image:String,
//    food_rating:Number
// }))

// var User= mongoose.model('user',mongoose.Schema({
//     email:String,
//     name:String,
//     password:String,
//     Address:String,
//     bascket:[Object]
//  }))
//  Tablesx.deleteOne({
//      food_name:"Spring roll"
//  })
//  .then(e=>console.log(e))
//  .catch(e=>console.log(e));
// app.get("/showinsert", (req,res)=>{
//     res.render("in");
// })
// Tablesx.find({})
// .then(data=>console.log(data))
// .catch(e=>console.log(e));

// app.post('/insertfood',(req,res)=>{
//   var id=parseInt(req.body.id);
//   var prize=parseInt(req.body.prize);
// var rating=parseInt(req.body.rating);

//     console.log(req.body);
//     var file=req.files.mfile;
//     console.log(req.body);
//      file.mv("./images/"+file.name,(e)=>{
//          if(e){
//             res.send("sorry");
//              console.log("file not  upload");
//          }
//          else{
//             var Table2=new Tablesx({
//                 food_id:id,
//                 food_name:req.body.name,
//                 food_content:req.body.content,
//                 food_prize:prize,
//                 food_category:req.body.category,
//                 food_image:`https://legendnodeapp2.herokuapp.com/images/${file.name}`,
//                 food_rating:rating
//             });
//             Table2.save((e)=>{
//                 if(e){
//                     console.log("errs");
//                 }
//                 else{
//                     console.log("inseted successfully")
//                 }
//             }) 
//             res.send(JSON.stringify({meassage:"food item added succesfully"}));
           
//          }
//      })



  
// })



// app.get('/getfood',async(req,res)=>{
//     var x= await Tablesx.find({})
//     res.status(202).send(JSON.stringify(x))
// })
// app.get('/finduser',async(req,res)=>{
//     console.log('fu is call at 123 '+req.headers.id);
//     if(req.headers.id){
//         var x= await User.find({_id:req.headers.id})
//         res.status(202).send(JSON.stringify(x))
//     }
   
// })



// app.get('/',(req,res)=>{
//     res.send(JSON.stringify({h:"hello"}));
// })
// app.get('/create',(req,res)=>{
  
//     // console.log(req.headers);
//     console.log(req.body);
//     if(req.body){
//         var Table1=new Table({
//             name:req.body.name,
//             roll:req.body.roll,
//             place:req.body.place
//         });
//         Table1.save((e)=>{
//             if(e){
//                 console.log("errs");
//             }
//             else{
//                 console.log("inseted successfully")
//             }
//         }) 
//         res.send(JSON.stringify({success:"yes"})) 
//     }
//     else if(req.headers)
//     {
//         var Table1=new Table({
//             name:req.headers.name,
//             roll:req.headers.roll,
//             place:req.headers.place
//         });
//         Table1.save((e)=>{
//             if(e){
//                 console.log("erri");
//             }
//             else{
//                 console.log("inseted successfully")
//             }
//         })
//         res.send(JSON.stringify({success:"yes"}))
//     }
//     else {
//         res.send(JSON.stringify({massage:"something is wrong"}))
//     }


// })

// app.get('/signIn',async(req,res)=>{
//     console.log(req.headers);
// var email1=req.headers.email;
// var name1=req.headers.name;
// var password1=req.headers.password;
// var Address1=req.headers.Address;

// var user1=new User({
//     email:email1,
//     name:name1,
//     password:password1,
//     Address:Address1,
//     bascket:[]
// })
// user1.save();
// res.status(202).send(JSON.stringify({message:"user register successfully"}))

// })


// app.get('/logIn',async (req,res)=>{
// var x= await User.find({
//     $and:[{email:req.headers.email},{password:req.headers.password}]
// }).limit(1);
// if(!x[0]){
//     res.status(202).send(JSON.stringify({message:"sorry email and password not found"}))
// }
// else{
//     res.status(202).send(JSON.stringify(x))
// }
// })

// app.get('/In',async (req,res)=>{
//     var x= await User.find({name:"rohan"})
//     res.status(202).send(JSON.stringify(x))
//     })

// app.get('/add',async (req,res)=>{
// if(req.headers){
//     const foodid=req.headers.foodid;
//     const userid=req.headers.userid;
//   var x=await Tablesx.find({food_id:foodid}).limit(1);
//   var y=await User.find({_id:userid}).limit(1);
//   console.log(y);
//   console.log(x[0].food_id);
//   User.updateOne({_id:userid},{$push:{"bascket":{
//     food_id:x[0].food_id,
//     food_name:x[0].food_name,
//     food_content:x[0].food_content,
//     food_prize:x[0].prize,
//     food_image:x[0].food_image
//   }}})
//   .then(msg=>console.log(msg))
//   .catch(e=>console.log(e))
//   res.status(202).send(JSON.stringify({message:"add item successfully"}))
// }
// })




// app.get("/search",async (req,res)=>{
//     console.log("search is call ")
//     if(req.body){
//         const d= await  Table.find({name:req.body.name});
//         res.send(d);
//     }
//     else if(req.headers){
//         const d= await  Table.find({name:req.headers.name});
//         res.send(d);
//     }
//     else {
//         res.send(JSON.stringify({massage:"something is wrong"}))
//     }

 
// })

// app.get('/hel',async(req,res)=>{
// await Table.find({}, function (err, person) {
//     if (err) return handleError(err); 
//     res.send(person);
//   });
// })




app.listen(PORT,()=>{
    console.log('server is running on '+PORT);
})