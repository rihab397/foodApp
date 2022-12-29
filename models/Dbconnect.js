var mongoose = require('mongoose');
require('dotenv').config();
let connectionStr=process.env.mongoURI
// process.env.mongoURI?process.env.mongoURI:"mongodb://127.0.0.1:27017/db1"
mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connect succesfully");
    })
    .catch((err) => {
        console.log(err);
    });

module.exports={mongoose};    