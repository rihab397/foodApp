let router = require('express').Router();
let { Save,returnExcel,fetchApplicant,SaveUserProfilePdf,fetchAllApplicant,downloadFile,dashBoardData} = require("../controllers/Career");
var path = require('path');
let {ValidateToken}=require("../controllers/auth");
let multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/')
    },
    filename: function (req, file, cb) {
        let fileName = `${file.fieldname + Date.now()}${path.extname(file.originalname)}`
        req.body[file.fieldname] = fileName;
        cb(null, fileName)
    }
});

const uploads = multer({
    storage: storage
});
router.post("/Save",ValidateToken, uploads.fields([
    {
        name: "Photograph",
        maxCount: 5,
    },
    {
        name: "Signature",
        maxCount: 5,
    },
    {
        name: "Resume",
        maxCount: 5,
    },
]), Save);
router.post("/SaveUserProfilePdf", uploads.fields([
    {
        name: "userProfilePdf",
        maxCount: 5,
    },
]), SaveUserProfilePdf);
router.post("/ApplicationCount",ValidateToken,returnExcel)
router.post("/ApplicationGet",ValidateToken,fetchApplicant)
router.get("/downloadFile",ValidateToken,downloadFile)
router.get("/fetchAllApplicant",ValidateToken,fetchAllApplicant)
router.get("/dashBoardData",ValidateToken,dashBoardData)



module.exports=router;



