let { schema } = require("../models/Unpaidinvestors");
const reader = require("xlsx");
var fs = require('fs');
var { parse } = require('csv-parse');
const mongoose = require("mongoose");
const { Mongoose } = require("mongoose");



let serachInvestor = (req, res) => {
    let { id } = req.params;
    res.render("SearchInvestors", { id })
}

let uploadPage = (req, res) => {
    res.render("uploadInvestor")
}
let investorRecords = (req, res) => {
    res.render("investorRecords")
}

let insvestorViewPage = (req, res) => {
    let { id, folio } = req.params;
    res.render("insvestorViewPage", {
        // id:'6350f733d268ae2e3c99cade',    
        // folio:"100152"
        id, folio
    })
}

let fetchAllInvestors = async (req, res) => {
    try {
        let investors = await schema.find({}, { _id: 1, Name: 1 });
        res.status(200).send(JSON.stringify({
            message: "records found",
            data: investors
        }))
    }
    catch (err) {
        res.send({
            message: "something is wrong",
            error: err
        })
    }
}
let fetch = async (req, res) => {
    try {
        // console.log(req.body);
        let folio = req.body.folio;
        let id = req.body.id
        // ,"fileData.FOLIO NO":folio 
        schema.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(id) }, },
            {
                $project: {
                    fileData: {
                        $filter: {
                            input: "$fileData",
                            as: "val",
                            cond: { $eq: ["$$val.FOLIO NO", String(folio).trim()] }
                        }
                    }
                }
            }
        ]).then(val => {
            console.log(val);
            res.status(200).send(JSON.stringify({
                data: val[0].fileData
            }))
        })
            .catch(er => console.log(er))
        // console.log(data);
        // if (data.length) {
        //     let Record = data[0].fileData.filter(val =>{
        //         if( val["FOLIO NO"] == folio){
        //           console.log(val)
        //             return(val)
        //         }
        //     });
        //     // console.log(Record)
        //     res.status(200).send(JSON.stringify({
        //         data: Record
        //     }))
    // }
    }
    catch (er) {
    res.status(500).send(JSON.stringify({
        error: er,
        message: "Sorry no record found",
    }))
}
}

let upload = (req, res) => {
    // det.xlsx
    let fileType = req.body.fileName.split(".")[1];
    let finalData
    let date = new Date();
    try {
        if (fileType && (fileType == ("xlsx" || "json" || "csv"))) {
            if (fileType == "xlsx") {
                let file = reader.readFile(`images/${req.body.fileName}`);

                let data = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]);
                let keys = Object.values(data[0]);
                let filteredData = JSON.parse(JSON.stringify(data.filter((val, i) => i != 0)))
                finalData = filteredData.map(val => {
                    let temp = {};
                    let values = Object.values(val)
                    for (let i = 0; i < keys.length; i++) {
                        values[i] ? temp[keys[i]] = String(values[i]).trim() : temp[keys[i]] = ""
                    }
                    return temp;
                })

            }
            // if (fileType == "csv") {
            //     var csvData = [];
            //     fs.createReadStream(`images/${req.body.fileName}`)
            //         .pipe(parse())
            //         .on('data', function (csvrow) {
            //             console.log(csvrow);
            //             //do something with csvrow
            //             csvData.push(csvrow);
            //         })
            //         .on('end', function () {
            //             //do something with csvData
            //             console.log(csvData);
            //         });
            //     console.log(csvData);

            //     finalData = csvData

            // }

            if (fileType == "json") {
                console.log(fileType);
                finalData = JSON.parse(fs.readFileSync(`images/${req.body.fileName}`, 'utf8'));
                console.log(fileType);
            }
            try {
                schema.insertMany([{
                    Name: req.body.Name,
                    fileData: finalData,
                    date: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`
                }]).then((v) => console.log("save", v)).catch(er => console.log(er))
            }
            catch (er) {
                console.log(er)
            }
            console.log("record save");
            res.send({
                message: "upload successful"
            })
        }
        else {
            throw "file not supported";
        }
    }
    catch (er) {
        res.status(500).send({
            message: "uploading successful",
            err: er
        })
    }
}

module.exports = {
    fetch,
    upload,
    serachInvestor,
    insvestorViewPage,
    uploadPage,
    fetchAllInvestors,
    investorRecords
}
