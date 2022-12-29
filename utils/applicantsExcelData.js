

let QualificationRowformat =
    [
        { type: "text", md: 1, label: "Qualification", name: "qualification", validate: true, disable: false, set: false,validate:false },
        { type: "text", md: 2, label: "Collage/School Name", name: "Collage_School_Name", validate: true, disable: false, set: true,validate:true },
        { type: "text", md: 2, label: "Qualification Name", name: "Qualification_Name", validate: true, disable: false, set: true,validate:true },
        { type: "text", md: 2, label: "Univerersity Or Board", name: "UniverersityOrBoard", validate: true, disable: false, set: true,validate:true },
        { type: "datetime-local", md: 2, label: "Passing Year", name: "Passing Year", validate: true, disable: false, set: true,validate:true },
        { type: "Number", md: 1, label: "Percantage", name: "Percantage", validate: true, disable: false, set: true,validate:true },
        { type: "text", md: 1, label: "Division", name: "Division", validate: true, disable: false, set: true,validate:true },
        { type: "multi2", md: 1, label: "Program", name: "Program", validate: true, disable: false, set: true,validate:true, options: [{ id: 1, label: "Regular", value: "Regular" }, { id: 1, label: "Part Time", value: "Part Time" }, { id: 1, label: "Full Time", value: "Full Time" }, { id: 1, label: "Correspondence", value: "Correspondence" },] },
    ]
let EmployementRowFormat = [
    { type: "text", md: 2, label: "Organisation Name", name: "OrganisationName", validate: true, disable: false, set: true,validate:false },
    { type: "text", md: 1, label: "Organisation Address", name: "OrganisationAddress", validate: true, disable: false, set: true,validate:true },
    { type: "text", md: 1, label: "Employer Type", name: "EmployerType", validate: true, disable: false, set: true,validate:true },
    { type: "text", md: 1, label: "Post Held", name: "PostHeld", validate: true, disable: false, set: true,validate:true },
    { type: "text", md: 1, label: "Department", name: "Department", validate: true, disable: false, set: true,validate:true },
    { type: "datetime-local", md: 1, label: "Start From", name: "From", validate: true, disable: false, set: true,validate:true },
    { type: "datetime-local", md: 1, label: "To", name: "To", validate: true, disable: false, set: true,validate:true },
    { disable: true, type: "text", md: 1, label: "Experince Year", name: "ExperinceYear", validate: true, disable: false, set: true,validate:true },
    { type: "text", md: 2, label: "Responsiblilites", name: "Responsiblilites", validate: true, disable: false, set: true,validate:true },
];
var vendorform1  = [
    //disable:false { set: true, type: "text", md: 3, label: "SAP ID", name: "SapId", function: "", sectionTilte: "General Information",  validate: true },
    { disable: false, set: true, type: "text", md: 3, label: "Company Name", name: "Company_Name", function: "", validate: true },
    { disable: false, set: true, type: "multi2", md: 3, label: "Post Applied", name: "Post_Applied", function: "", validate: true, options: [{ id: 0, label: "C.E.O", value: "C.E.O" }, { id: 1, label: "M.D", value: "M.D" }] },
    { disable: false, set: true, type: "text", md: 3, label: "First Name", name: "First_Name", function: "", validate: true },
    { disable: false, set: true, type: "text", md: 3, label: "Middle Name", name: "Middle_Name", function: "", validate: false },
    { disable: false, set: true, type: "text", md: 3, label: "Last Name", name: "Last_Name", function: "", validate: false },
    { disable: false, set: true, type: "text", md: 3, label: "Former First Name", name: "Former_First_Name", function: "", validate: false },
    { disable: false, set: true, type: "text", md: 3, label: "Former Middle Name", name: "Former_Middle_Name", function: "", validate: false },
    { disable: false, set: true, type: "text", md: 3, label: "Former Last Name", name: "Former_Last_Name", function: "", validate: false },
    { disable: false, set: true, type: "multi2", md: 3, label: "Guardian", name: "Guardian", function: "", validate: true, options: [{ id: 0, label: "Husband", value: "Husband" }, { id: 1, label: "Father", value: "Father" }] },
    { disable: false, set: false, type: "text", md: 3, label: "Guardian First Name", name: "Guardian_First_Name", Parent: "Guardian", function: "", validate: true },
    { disable: false, set: false, type: "text", md: 3, label: "Guardian Middle Name", name: "Guardian_Middle_Name", Parent: "Guardian", function: "", validate: false },
    { disable: false, set: false, type: "text", md: 3, label: "Guardian Last Name", name: "Guardian_Last_Name", Parent: "Guardian", function: "", validate: false },
    { disable: false, set: true, type: "datetime-local", md: 3, label: "Date Of Birth", name: "DOB", function: "", validate: true },
    { disable: true, set: true, type: "text", md: 3, label: "Age", name: "Age", function: "", validate: true },
    { disable: false, set: true, type: "multi2", md: 3, label: "Gender", name: "Gender", function: "", validate: true, options: [{ id: 0, label: "Male", value: "Male" }, { id: 1, label: "Female", value: "Female" }, { id: 2, label: "Trans-Gender", value: "Trans-Gender" }] },
    { disable: false, set: true, type: "multi2", md: 3, label: "Nationality", name: "Nationality", function: "", validate: true, options: [{ id: 0, label: "Indian", value: "Indian" }, { id: 1, label: "NRI", value: "NRI" }, { id: 2, label: "Other", value: "Other" }] },
    { disable: false, set: true, type: "multi2", md: 3, label: "Martial Status", name: "MartialStatus", function: "", validate: true, options: [{ id: 0, label: "Married", value: "Married" }, { id: 1, label: "Unmarried", value: "Unmarried" },] },
    { disable: false, set: true, type: "text", md: 3, label: "Mobile", name: "Mobile", function: "", validate: true },
    { disable: false, set: true, type: "text", md: 3, label: "Alternative Mobile Number ", name: "AlternativeMobile", function: "", validate: true },
    { disable: false, set: true, type: "multi2", md: 3, label: "Person Disabilities", name: "Person_Disabilities", function: "", validate: true, options: [{ id: 0, label: "Yes", value: "Yes" }, { id: 1, label: "No", value: "No" }] },
    {
        disable: false, set: true, type: "multi2", md: 3, label: "Category", name: "Category", function: "", validate: true, options: [{ id: 1, label: "Genral", value: "Genral" },
        { id: 2, label: "SC", value: "SC" },
        { id: 3, label: "ST", value: "ST" },
        { id: 4, label: "OBC", value: "OBC" },
        { id: 5, label: "EWS", value: "EWS" }
        ]
    },
    { disable: false, set: true, type: "text", SectionTitle: "ContactDetails", Parent: "ContactDetails", md: 3, label: "Correspondence Address", name: "Correspondence_Address", function: "", validate: true },
    { disable: false, set: true, type: "multi2", md: 3, label: "State", name: "State", function: "", Parent: "ContactDetails", validate: true, options: [{ id: 0, label: "New Delhi", value: "New Delhi" }] },
    { disable: false, set: true, type: "multi2", md: 3, label: "City", name: "City", function: "", Parent: "ContactDetails", validate: true, options: [{ id: 0, label: "New Delhi", value: "New Delhi" }] },
    { disable: false, set: true, type: "Number", md: 3, label: "Pin", name: "Pin", function: "", Parent: "ContactDetails", validate: true },
    { disable: false, set: true, type: "text", md: 3, label: "Mobile", name: "ContactMobile", function: "", Parent: "ContactDetails", validate: true },
    { disable: false, set: true, type: "text", md: 3, label: "Phone", name: "Phone", function: "", Parent: "ContactDetails", validate: true },
    { disable: false, set: true, type: "text", SectionTitle: "PermanentDetails", Parent: "PermanentDetails", md: 3, label: "Correspondence Address", name: "Correspondence_Address", function: "", validate: true },
    { disable: false, set: true, type: "multi2", md: 3, label: "State", name: "State", function: "", Parent: "PermanentDetails", validate: true, options: [{ id: 0, label: "New Delhi", value: "New Delhi" }] },
    { disable: false, set: true, type: "multi2", md: 3, label: "City", name: "City", function: "", Parent: "PermanentDetails", validate: true, options: [{ id: 0, label: "New Delhi", value: "New Delhi" }] },
    { disable: false, set: true, type: "Number", md: 3, label: "Pin", name: "Pin", function: "", Parent: "PermanentDetails", validate: true },
    { disable: false, set: true, type: "text", md: 3, label: "Mobile", name: "PemanentMobile", function: "", Parent: "PermanentDetails", validate: true },
    { disable: false, set: true, type: "text", md: 3, label: "Phone", name: "PermanentPhone", function: "", Parent: "PermanentDetails", validate: true },
    {
        disable: false, set: true, type: "text", SectionTitle: "Qualification", md: 12, label: "Qualification", name: "Qualification", function: "", validate: false, fields: [], intaialCount: 4, rowFormat: [
            { id: 0, Name: "Matric", rowData:JSON.parse(JSON.stringify( QualificationRowformat)) },
            { id: 1, Name: "PostMatric", rowData: JSON.parse(JSON.stringify( QualificationRowformat)) },
            { id: 2, Name: "Graduation", rowData: JSON.parse(JSON.stringify( QualificationRowformat)) },
            { id: 3, Name: "PostGraduation", rowData: JSON.parse(JSON.stringify( QualificationRowformat)) }
        ]
    },
    {
        disable: false, set: true, type: "text", SectionTitle: "EmployementDetail", md: 12, label: "Qualification", name: "Qualification", function: "", validate: false, fields: [], intaialCount: 4, rowFormat: [
            { id: 0, Name: "Ex1", rowData: JSON.parse(JSON.stringify( EmployementRowFormat))},
            { id: 1, Name: "Ex2", rowData: JSON.parse(JSON.stringify( EmployementRowFormat)) },
            { id: 2, Name: "Ex3", rowData: JSON.parse(JSON.stringify( EmployementRowFormat)) },
            { id: 3, Name: "Ex4", rowData: JSON.parse(JSON.stringify( EmployementRowFormat)) }
        ]
    },
    { disable: false, set: true, type: "multi2", md: 3, SectionTitle: "Other Details", label: "Are you currently under service agreement/bond with your existing employer? ", name: "UnderServiceBond", validate: true, options: [{ id: 1, label: "true", value: true }, { id: 1, label: "false", value: false }] },
    { disable: false, set: true, type: "multi2", md: 3, label: "Have you ever been charged or convicted for any criminal offense in India or abroad?", name: "CriminalCase", validate: true, options: [{ id: 1, label: "true", value: true }, { id: 1, label: "false", value: false }] },
    { disable: false, set: true, type: "multi2", md: 3, label: "Are you related to anyone who works for IFCI Ltd/IFCI Group Campanies?", name: "ReltatedToIfci", validate: true, options: [{ id: 1, label: "true", value: true }, { id: 1, label: "false", value: false }] },
    { disable: false, set: true, type: "textarea", md: 3, label: "Academic Achievements", name: "AcademicAchievements", validate: false },
    { disable: false, set: true, type: "textarea", md: 3, label: "ProfessionalAchievements", name: "ProfessionalAchievements", validate: false },
    { disable: false, set: true, type: "datetime-local", md: 3, label: "JoiningTime", name: "JoiningTime", validate: true },
    { disable: false, set: true, type: "file", md: 3, label: "Photograph", name: "Photograph", validate: true },
    { disable: false, set: true, type: "file", md: 3, label: "Signature", name: "Signature", validate: true },
    { disable: false, set: true, type: "file", md: 3, label: "Resume", name: "Resume", validate: true },
]


 function returnExcelData(arrData) {
    let maxQalEmp = { Qualification: 4, EmployementDetail: 4 }
    let ExcelHeader = [];
    let arrdata=arrData[0]

     arrData.forEach(applicant => {
        if (applicant.Qualification.length > maxQalEmp.Qualification) {
            maxQalEmp["Qualification"] = applicant.Qualification.length;
        }
        if (applicant.EmployementDetail.length > maxQalEmp.EmployementDetail) {
            maxQalEmp["EmployementDetail"] = applicant.EmployementDetail.length;
        }
    })


    ExcelHeader=vendorform1.map(val=>{
    if(!val.rowFormat){
        return({ header: val.name, key: val.name, width: 10 })
    }
    if(val.rowFormat ){
        let arr=[];
        val.rowFormat.forEach(v=>arr.push({ header: v.Name, key: v.Name, width: 10 }))
        for(let i=0;i<maxQalEmp[val.name];i++){
        JSON.parse(JSON.stringify(val.rowFormat[0].rowData)).map(value=>{
        arr.push({ header: value.label, key: value.name+i, width: 10 })
        })
    }
    return(arr)
    }
})
    

    return ExcelHeader.flat();
}
module.exports = {
    returnExcelData
}




