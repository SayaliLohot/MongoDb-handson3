const mongoose = require("mongoose")

const employeeShcema = new mongoose.Schema({
    firstName: String,
    lastName:String,
    salary:Number,
    department:String,
    lastCompany:String,
    lastSalary:Number,
    overallExp:Number,
    contactInfo:String,
    yearGrad:Number,
    gradStream:String
})

const Employee = mongoose.model("Human_Resource2",employeeShcema)//collection name, schemaname

module.exports = {Employee}