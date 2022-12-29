let { Applicant } = require("../models/Career")
const excelJS = require("exceljs");
let _ = require("lodash");
let { returnExcelData } = require("../utils/applicantsExcelData");
const { values } = require("lodash");

let returnOnlyData = (dat) => {
    let date = dat ? new Date(dat) : new Date(Date.now())
    return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`
}
let Save = async (req, res) => {
    let finalData = req.body;
    // else if(key=="ConatactDetails" || key=="PermanentDetails" || key == "Qualification" || key == "EmployementDetail"){


    try {

        let arr = ["ContactDetails", "PermanentDetails", "Qualification", "EmployementDetail"]
        arr.map(key => {
            finalData[key] = JSON.parse(finalData[key])
        })

        let dateStr = returnOnlyData()

        let inset = new Applicant({
            ...finalData, Date: new Date(dateStr).toISOString()
        })
        await inset.save().then(({ _id }) => {
            console.log(_id);
            res.send({
                id: _id,
                message: "record save"
            })
        })
    }
    catch (er) {
        res.status(500).send({
            message: "Something is wrong",
            err: er
        })
    }
}


let returnExcel = async (req, res) => {
    let { fromDate, EndDate } = req.body;
    fromDate = returnOnlyData(fromDate);
    EndDate = EndDate ? returnOnlyData(EndDate) : undefined;

    try {
        let recordSearch
        let tempObj = {}
        let tmepArr = [];
        let schema = []
        if (EndDate) {
            let data = await Applicant.find({ "Date": { $gte: new Date(fromDate).toISOString(), $lte: new Date(EndDate).toISOString() } })
            schema = returnExcelData(data)
            tmepArr=  data.map((obj2 )=> {
                let  obj=obj2["_doc"]
             return  Object.keys(obj).map(val => {
                    let tempObj = {}
                    if(typeof obj[val]=="string"){
                        tempObj = { ...tempObj, [val]: obj[val] }
                    }
                  else  if (Array.isArray(obj[val])) {
                        obj[val].map((v, i) => {
                            Object.entries(v).forEach(([key, value]) => {
                                tempObj = { ...tempObj, [key+i]: value }
                            })
                        })
                    }
                 else    if (!Array.isArray(obj[val]) && typeof obj[val] == "object" && obj[val]!=null && obj[val]!=undefined) {
                        Object.entries(obj[val]).forEach(([key, value]) => {
                            tempObj = { ...tempObj, [key]: value }
                        })
                    }
                    
                    
                    return tempObj;
                })
            })
            // tmepArr = arr;
            tmepArr.map(val=>{let v={};val.map(vl=>{Object.assign(v,vl)});return v})
        }
        else {
            recordSearch = await Applicant.find({ Date: new Date(fromDate).toISOString() })
            tempObj["date"] = new Date(fromDate).toISOString();
            tempObj["Total_Application"] = recordSearch.length;
            tmepArr.push(tempObj);
        }

        if (tmepArr.length) {
            const workbook = new excelJS.Workbook();  // Create a new workbook
            const worksheet = workbook.addWorksheet("My Users"); // New Worksheet
            worksheet.columns = EndDate?schema:[
                { header: "S no.", key: "s_no", width: 10 },
                { header: "Date", key: "date", width: 10 },
                { header: "Total Application", key: "Total_Application", width: 10 },
            ];
            (!EndDate?tmepArr:tmepArr.map(val=>{let v={};val.map(vl=>{Object.assign(v,vl)});return v})).forEach((user, i) => {
                user.s_no = i + 1;
                worksheet.addRow(user); // Add data in worksheet
            })
            // Making first line in excel bold
            worksheet.getRow(1).eachCell((cell) => {
                cell.font = { bold: true };
            });
            const data = await workbook.xlsx.writeFile(`images/users.xlsx`)
                .then(() => {
                    res.send({
                        fileName: "users.xlsx",
                        status: "success",
                        message: "file successfully downloaded",
                    });
                });
        }
    }
    catch (er) {
        res.status(500).send({
            message: "Something is wrong",
            err: er
        })
    }
}


let fetchApplicant = async (req, res) => {
    let { id } = req.body
    try {
        await Applicant.find({ _id: id }).then((data) => {
            res.send({
                message: "Something is wrong",
                data
            })
        })
    }
    catch (er) {
        res.status(500).send({
            message: "Something is wrong",
            err: er
        })
    }
}




let fetchAllApplicant = async (req, res) => {
    let { id } = req.body
    try {
        await    Applicant.find({},{_id:1,First_Name:1,Post_Applied:1,Category:1,Company_Name:1,Resume:1}).then((data)=>{
        // await Applicant.find({}).then((data) => {

            res.send({
                message: "Fetch Successfully",
                data
            })
        })
    }
    catch (er) {
        res.status(500).send({
            message: "Something is wrong",
            err: er
        })
    }
}

let SaveUserProfilePdf = async (req, res) => {
    let { id, userProfilePdf } = req.body
    try {
        await Applicant.updateOne({ _id: id }, { $set: { "userProfilePdf": userProfilePdf } }).then((data) => {
            res.send({
                message: "Record Updated",
                data
            })
        })
    }
    catch (er) {
        res.status(500).send({
            message: "Something is wrong",
            err: er
        })
    }
}
function downloadFile(req, res) {
    try {
        res.download(`images/${req.query.fileName}`);
    }
    catch (er) {
        res.status(500).send({
            message: "Something is wrong",
            err: er
        })
    }
}

let dashBoardData= async(req,res)=>{
    try {
         await Applicant.find({}).then((data) => {
            res.send({
                message: "Fetch Successfully",
                data
            })
        })
    }
    catch (er) {
        res.status(500).send({
            message: "Something is wrong",
            err: er
        })
    }
}

module.exports = {
    Save,
    returnExcel,
    fetchApplicant,
    SaveUserProfilePdf,
    fetchAllApplicant,
    downloadFile,
    dashBoardData
}
