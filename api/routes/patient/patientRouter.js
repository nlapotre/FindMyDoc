const express = require('express');
const patientCtrl = require ('./patientCtrl');

exports.router = ( () =>{
  var patientRouter = express.Router();

  patientRouter.route('/register/').post(patientCtrl.register);
  patientRouter.route('/login/').post(patientCtrl.login);
  patientRouter.route('/infos/').get(patientCtrl.getPatientInfos);
  patientRouter.route('/infosFromId/').get(patientCtrl.getPatientInfosFromId);

  return patientRouter;

} )();
