const bcrypt = require('bcrypt');
const jwtUtils = require('../../utils/jwt.utils');
const models = require('../../models');

module.exports = {
  register: (req, res) => {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var login = req.body.login;
    var password = req.body.password;
    var specialty = req.body.specialty;
    var postalCode = req.body.postalCode;
    var mail = req.body.mail;
    var tel = req.body.tel;

    models.Doctor.findOne({
      attributes: ['login'],
      where: { login: login }
    })
    .then((doctorFound) => {
      if(!doctorFound){
        bcrypt.hash(password, 5, (err, bcryptedPassword ) => {
          var newDoctor = models.Doctor.create({
            firstName: firstName,
            lastName: lastName,
            login: login,
            password: bcryptedPassword,
            specialty: specialty,
            postalCode: postalCode,
            mail: mail,
            tel: tel
          })
          .then((newDoctor) => {
            return res.status(201).json({
              'ID': newDoctor.id,
              'name': newDoctor.firstName
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

      models.Doctor.findOne({
        where: {login: login}
      })
      .then((doctorFound) => {
        if(doctorFound){
          bcrypt.compare(password, doctorFound.password, (errBcrypt, resBcrypt)=>{
            if(resBcrypt){
              res.status(200).json({
                'ID': doctorFound.id,
                'token': jwtUtils.generateToken(doctorFound)
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


  getDoctorInfos: (req, res) =>{
    var headerAuth = req.headers['authorization'];
    var doctorId = jwtUtils.getUserId(headerAuth);

    if(doctorId < 0){
      res.status(400).json({'error' : 'wrong token'});
    }
    models.Doctor.findOne({
      attributes: ['id', 'mail', 'firstName'],
      where: {id: doctorId }
    }).then((doctor)=> {
      if (doctor){
        res.status(201).json(doctor);
      }
      else{
        res.status(404).json({'error': 'user not found'});
      }
    }).catch((err) => {
      res.status(500).json({'error': 'cannot fetch user'});
    });
  }
}
