const express = require('express');
const doctorPatientCtrl = require ('./doctorPatientCtrl');

exports.router = ( () =>{
  var doctorPatientRouter = express.Router();
  doctorPatientRouter.route('/create/').post(doctorPatientCtrl.create);
  doctorPatientRouter.route('/getPatients/').get(doctorPatientCtrl.getPatients);


  return doctorPatientRouter;

} )();
