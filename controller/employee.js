const {Employee} = require("../module/employee")

const insertingData = async(req, res)=>{
    const employeeData = req.body;
    console.log(employeeData);
    try {
        const employeeObj = new Employee({
            firstName: employeeData.firstName,
            lastName:employeeData.lastName,
            salary:employeeData.salary,
            department:employeeData.department,
            lastCompany:employeeData.lastCompany,
            lastSalary:employeeData.lastSalary,
            overallExp:employeeData.overallExp,
            contactInfo:employeeData.contactInfo,
            yearGrad:employeeData.yearGrad,
            gradStream:employeeData.gradStream
        })
        const result = await employeeObj.save();
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send({message:"Something went wrong while processing the data"});
    }
}

const getAllData = async (req, res)=>{
    try {
        const result = await Employee.find();
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send({message: "Something went wrong while processing the data"});
    }
}

const getSalaryData = async (req, res)=>{
    const salary = req.params.sal;
    // salary = salary.toString();
    // console.log(salary)
    const query = {salary: {$gt: salary}};
    try {
        const result = await Employee.findOne(query);
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send({message:"Something went wrong while processing the data"});
    }
}

const getExpData = async (req, res)=>{
    let overallExp = req.params.exp;
    // console.log("overallExp", overallExp);
    const query = {overallExp: {$gt: overallExp}};
    try {
        const result = await Employee.findOne(query);
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send({message:"Something went wrong while processing the data"});
    }
    
}

const getGradExpData = async (req, res)=>{
    const yearGrad = req.params.grad;
    const overallExp = req.params.exp;
    // console.log("yearGrad & overallExp", yearGrad, overallExp);
    const query = {yearGrad: {$gt: yearGrad}, overallExp: {$gt: overallExp}};
    try {
        const result = await Employee.findOne(query);
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send({message: "Something went wrong while processing the data"});
    }
}

const updatingData = async(req, res)=>{
    const filter = req.body.filter;
    const filterValue = {salary: {$gt: filter.salary}};
    const update = req.body.update;
    const updateValue = {$set: update};
    console.log("filter & update", filter, update);
    console.log("filterValue & updateValue", filterValue, updateValue);
    try {
        const result = await Employee.updateMany(filterValue, updateValue);
        return res.status(200).send(result);
    } catch (error) {
        return res.send(500).send({message: "Something went wrong while processing the data"});
    }
}

const deleteEmployeeData = async(req, res)=>{
    const lastCompany = req.params.lastCompany;
    // console.log("lastCompany", lastCompany);
    const query = {lastCompany: lastCompany};
    try {
        const result = await Employee.deleteMany(query);
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send({message: "Something went wrong while processing the data"});
    }
    
}

module.exports = {
    insertingData,
    getAllData,
    getSalaryData,
    getExpData,
    getGradExpData,
    updatingData,
    deleteEmployeeData
}