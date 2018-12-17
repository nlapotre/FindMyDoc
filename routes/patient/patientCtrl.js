const bcrypt = require('bcrypt');
const jwtUtils = require('../../utils/jwt.utils');
const models = require('../../models');

module.exports = {
  register: (req, res, next) => {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var login = req.body.login;
    var password = req.body.password;
    var postalCode = req.body.postalCode;
    var mail = req.body.mail;
    var tel = req.body.tel;

    models.Patient.findOne({
      attributes: ['login'],
      where: { login: login }
    })
    .then((patientFound) => {
      if(!patientFound){
        bcrypt.hash(password, 5, (err, bcryptedPassword ) => {
          var newPatient = models.Patient.create({
            firstName: firstName,
            lastName: lastName,
            login: login,
            password: bcryptedPassword,
            postalCode: postalCode,
            mail: mail,
            tel: tel
          })
          .then((newPatient) => {
            return res.status(201).json({
              'ID': newPatient.id,
              'name': newPatient.firstName
            })
          .catch((err) => {
            res.status(500).json({'error' : 'unable to create user  '});
          })
          })
        });
      }
      else{
        res.status(409).json({'error' : 'user already exists'});
      }

    })
    .catch((err)=> {
      res.status(500).json({'error' : 'unable to verify user   '});
    })
  },




  login: (req, res) => {
      var login = req.body.login;
      var password = req.body.password;

      models.Patient.findOne({
        where: {login: login}
      })
      .then((patientFound) => {
        if(patientFound){
          bcrypt.compare(password, patientFound.password, (errBcrypt, resBcrypt)=>{
            if(resBcrypt){
              res.status(200).json({
                'ID': patientFound.id,
                'token': jwtUtils.generateToken(patientFound)
              });
            }
            else{
              res.status(403).json({'error' : 'invalid password'});
            }
          })
        }else{
          res.status(409).json({'error' : 'user does not exists'});
        }
      })
      .catch((err)=>{
        res.status(500).json({'error' : 'unable to verify user'});
      })
  },


  getPatientInfos: (req, res) =>{
    var headerAuth = req.headers['authorization'];
    var patientId = jwtUtils.getUserId(headerAuth);

    if(patientId < 0){
      res.status(400).json({'error' : 'wrong token'});
    }
    models.Patient.findOne({
      attributes: ['id', 'mail', 'firstName'],
      where: {id: patientId }
    }).then((patient)=> {
      if (patient){
        res.status(201).json(patient);
      }
      else{
        res.status(404).json({'error': 'user not found'});
      }
    }).catch((err) => {
      res.status(500).json({'error': 'cannot fetch user'});
    });
  }
}
