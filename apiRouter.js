const express = require('express');
const doctorRouter = require('./routes/doctorRouter').router;
const patientRouter = require('./routes/patientRouter').router;
const doctorPatientRouter = require('./routes/doctorPatientRouter').router;


exports.router = (() => {
  var apiRouter = express.Router();
  apiRouter.use('/doctor/', doctorRouter);
  apiRouter.use('/patient/', patientRouter);
  apiRouter.use('/doctorPatient/', doctorPatientRouter);
  return apiRouter;
})();
