let router=require('express').Router();
let {fetch,upload,uploadPage,serachInvestor,insvestorViewPage,fetchAllInvestors,investorRecords}=require("../controllers/Unpaidinvestors");
var path=require('path');
let multer=require('multer');
const { ValidateToken } = require('../controllers/auth');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/')
    },
    filename: function (req, file, cb) {
        let fileName=`${file.fieldname+Date.now()}${path.extname(file.originalname)}`
        req.body["fileName"] = fileName;
        cb(null,fileName )
    }
  });
    
    const uploads = multer({
      storage: storage
    });

router.post("/fetchinvestor",fetch);
router.post("/uploadInvestorFile", ValidateToken, uploads.fields([
  {
    name: "investorFile",
    maxCount: 5,
  },
]),upload);

router.get("/uploadPage",uploadPage)
router.get("/serachInvestors/:id",serachInvestor)
router.get("/insvestorViewPage/:id/:folio",insvestorViewPage)
router.get("/fetchAllInvestors",fetchAllInvestors)
// router.get("/investorRecords",ValidateToken,investorRecords)
router.get("/investorRecords",investorRecords)

module.exports=router;


