const express = require('express');
const doctorRouter = require('./routes/doctor/doctorRouter').router;
const patientRouter = require('./routes/patient/patientRouter').router;
const doctorPatientRouter = require('./routes/doctorpatient/doctorPatientRouter').router;
const appointmentRouter = require('./routes/appointment/appointmentRouter').router;



exports.router = (() => {
  var apiRouter = express.Router();
  apiRouter.use('/doctor/', doctorRouter);
  apiRouter.use('/patient/', patientRouter);
  apiRouter.use('/doctorPatient/', doctorPatientRouter);
  apiRouter.use('/appointment/', appointmentRouter);
  return apiRouter;
})();
