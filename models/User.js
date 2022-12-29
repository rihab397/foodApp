let {mongoose}=require("./Dbconnect");

let User = mongoose.model("users", mongoose.Schema({
    Email: String,
    Password: String,
    Lastlogin:String,
    User_locked:Boolean,
    Lock_region:String,
    Lock_Duration:Object
}));

module.exports={User};
