const express = require('express');
const Router = express.Router();
const controllerFunc = require('../controller/employee');

Router.post('/employee', controllerFunc.insertingData);
Router.get('/employee', controllerFunc.getAllData);
Router.get('/employee/salary/:sal', controllerFunc.getSalaryData);
Router.get('/employee/overallExp/:exp', controllerFunc.getExpData);
Router.get('/employee/yearGrad/:grad/overallExp/:exp', controllerFunc.getGradExpData);
Router.put('/employee', controllerFunc.updatingData);
Router.delete('/employee/:lastCompany', controllerFunc.deleteEmployeeData);

module.exports = Router;