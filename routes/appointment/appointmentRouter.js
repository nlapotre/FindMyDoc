const express = require('express');
const appointmentCtrl = require ('./appointmentCtrl');

exports.router = ( () =>{
  var appointmentRouter = express.Router();

  appointmentRouter.route('/create/').post(appointmentCtrl.create);

  return appointmentRouter;

} )();
