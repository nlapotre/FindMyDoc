const models = require('../../models');


module.exports = {
    create: (req, res) => {
      var doctorId = req.body.doctorId;
      var patientId = req.body.patientId;
      var appDate = req.body.appDate;
      var appTime = req.body.appTime;

      models.Appointment.findOne({
        attributes: ['doctorId', 'patientId', 'appDate', 'appTime'],
        where: {doctorId: doctorId, patientId: patientId, appDate: appDate, appTime: appTime}
      })
      .then((foundOne) => {
        if(!foundOne){
           var newOne = models.Appointment.create({
            doctorId: doctorId,
            patientId: patientId,
            appDate: appDate,
            appTime: appTime
          })
          .then((newOne)=> {
            return res.status(201).json({
              'DoctorId': newOne.doctorId,
              'PatientId': newOne.patientId,
              'appDate': newOne.appDate,
              'appTime': newOne.appTime
            })
            .catch((err) => {
              res.status(500).json({'error' : 'unable to create user  '});
          })
        })
      }
      else{
        res.status(409).json({'error' : 'user already exists'});
      }
    })
    .catch((err)=> {
      res.status(500).json({'error' : 'unable to verify user   '});
    })

  },


  getPatients: (req, res) => {
    var doctorId = req.query.id;

    models.DoctorPatient.findAll({
      attributes: ['patientId'],
      where: {doctorId: doctorId}
    }).then((patients) => {
      res.status(201).json(patients);
    }).catch((err)=> {
      res.status(404).json({'error': 'could not find patients'});
    });
  }
}
