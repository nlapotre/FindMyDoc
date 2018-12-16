const express = require('express');
const doctorRouter = require('./routes/doctorRouter').router;
const patientRouter = require('./routes/patientRouter').router;


exports.router = (() => {
  var apiRouter = express.Router();
  apiRouter.use('/doctor/', doctorRouter);
  apiRouter.use('/patient/', patientRouter);
  return apiRouter;
})();
