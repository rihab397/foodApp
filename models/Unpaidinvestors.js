let {mongoose}=require("./Dbconnect");

let schema = mongoose.model("unpaidInvestor", mongoose.Schema({
    Name: String,
    fileData: Array,
    date: String
}));

// schema.deleteMany({Name:"undefined"}).then(()=>console.log("delete records successfully"))
module.exports={schema};

