let { mongoose } = require("./Dbconnect");

// let ContactDetail = mongoose.model("ContactDetail", mongoose.Schema({
//     Correspondence_Address: String,
//     City: String,
//     state: String,
//     Pin: Number,
//     Mobile: String,
//     Phone: String,
// }));
// let EducationDetail = mongoose.model("EducationDetail", mongoose.Schema({
//     Qualification: String,
//     Collage_School_Name: String,
//     Qualification_Name: String,
//     UniverersityOrBoard: String,
//     PassingYear: String,
//     Percantage: Number,
//     Division: String,
//     Program: Number
// }));
// let EmployementDetail = mongoose.model("EmployementDetail", mongoose.Schema({
//     OrganisationName: String,
//     OrganisationAddress: String,
//     EmployerType: Number,
//     PostHeld: String,
//     Department: String,
//     From: String,
//     To: String,
//     ExperinceYear: Number,
//     Responsiblilites: String
// }));

let Applicant = mongoose.model("Applicant", mongoose.Schema({
    Company_Name:String,
    Post_Applied:String,
    First_Name: String,
    Middle_Name: String,
    Last_Name: String,
    Former_First_Name: String,
    Former_Middle_Name: String,
    Former_Last_Name: String,
    Guardian: Object,
    PemanentMobile:String,
    PermanentPhone:String,
    ContactMobile:String,
    DOB: String,
    Age: String,
    Gender: String,
    Nationality: String,
    MaritalStatus: String,
    Mobile: String,
    Alternative_Mobile: String,
    Alternative_Email: String,
    Category: String,
    Person_Disabilities: String,
    ContactDetails: Object,
    PermanentDetails: Object,
    Qualification: Array,
    EmployementDetail: Array,
    UnderServiceBond: String,
    CriminalCase: String,
    ReltatedToIfci: String,
    AcademicAchievements: String,
    ProfessionalAchievements: String,
    JoiningTime: String,
    Photograph: String,
    Signature: String,
    Resume: String,
    Date:String,
    userProfilePdf:String
}));

// let User = mongoose.model("application", mongoose.Schema({
//     Company_Name: String,
//     Post_Applied: String,
//     From: String,
//     To: String,
//     Applicants: [Applicant]
// }));

module.exports = { Applicant };
