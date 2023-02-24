let express = require("express");
let app=express();
// const reader = require("xlsx")
// let file = reader.readFile("./images/det.xlsx");
var path=require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();
app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views/'));
var PORT =   process.env.PORT || 1337 ||5000 ||2000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });
  app.use("/images/",express.static(path.join(__dirname, '/images/')))
  let cors=require("cors");
  app.use(cors({origin: true, credentials: true}));
  // Applicant.deleteMany({}).then((val)=>console.log("collection drop",val)).catch(er=>console.log(er))
let unpaidInvestorRouter=require("./routers/unpaidinvestor");
let Career= require("./routers/Career")
let userRouter=require("./routers/user");
app.use("/investors",unpaidInvestorRouter)
app.use("/user",userRouter)
app.use("/Career",Career)
app.listen(PORT, () => {
    console.log('server is running on port ' + PORT);
})



