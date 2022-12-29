let app = require("express")();
const reader = require("xlsx")
var mongoose = require('mongoose');
let file = reader.readFile("./images/det.xlsx");
var bodyParser = require('body-parser');
const { json } = require("body-parser");
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));



mongoose.connect("mongodb://127.0.0.1:27017/db1", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connect succesfully");
    })
    .catch((err) => {
        console.log(err);
    });

let schema = mongoose.model("unpaidInvestor", mongoose.Schema({
    Name: String,
    fileData: Array,
    date: String
}));

// (async () => {
//     let date = new Date();


//     let data = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]);
//     let keys = Object.values(data[0]);
//     let filteredData=JSON.parse(JSON.stringify(data.filter((val,i)=>i!=0)))
//     let finalData = filteredData.map(val => {
//         let temp = {};
//         let values = Object.values(val)
//         for (let i = 0; i < keys.length; i++) {
//             values[i] ? temp[keys[i]] = values[i] : temp[keys[i]] = ""
//         }
//         return temp;
//     })

//       let inset=new schema({
//         Name:"det",
//         fileData:finalData,
//         date:`${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`
//       })


//     inset.save();
//     console.log("record save");
   
// })()


app.post("/getfile", async (req, res) => {
    try {
        console.log(req.body);
        let folio = req.body.folio;
        let id = req.body.id
        let data = await schema.find({ _id: id })
        console.log(data);
        if (data.length) {
            let Record = data[0].fileData.filter(val => val["FOLIO NO"] == folio);
           
            res.status(200).send({
                data: Record
            })
        }
    }
    catch {
        // else{
        res.status(500).send({
            find: "Sorry no record found"
        })
        // }
    }


})


app.listen(4000, () => {
    console.log('server is running on ' + 4000);
})


