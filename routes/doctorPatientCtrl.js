const models = require('../models');


module.exports = {
    create: (req, res) => {
      var doctorId = req.body.doctorId;
      var patientId = req.body.patientId;

      models.DoctorPatient.findOne({
        attributes: ['doctorId', 'patientId'],
        where: {doctorId: doctorId, patientId: patientId}
      })
      .then((foundOne) => {
        if(!foundOne){
           var newOne = models.DoctorPatient.create({
            doctorId: doctorId,
            patientId: patientId
          })
          .then((newOne)=> {
            return res.status(201).json({
              'DoctorId': newOne.doctorId,
              'PatientId': newOne.patientId
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
