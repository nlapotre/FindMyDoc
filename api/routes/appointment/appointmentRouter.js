const express = require('express');
const appointmentCtrl = require ('./appointmentCtrl');

exports.router = ( () =>{
  var appointmentRouter = express.Router();

  appointmentRouter.route('/create/').post(appointmentCtrl.create);
  appointmentRouter.route('/getDoctorAppForTheDay/').get(appointmentCtrl.getDoctorAppForTheDay);
  appointmentRouter.route('/getDoctorApp/').get(appointmentCtrl.getDoctorApp);
  appointmentRouter.route('/getPatientApp/').get(appointmentCtrl.getPatientApp);
  appointmentRouter.route('/getPatientFromDoctorApp/').get(appointmentCtrl.getPatientFromDoctorApp);
  appointmentRouter.route('/updateComment/').post(appointmentCtrl.updateComment);


  return appointmentRouter;

} )();
