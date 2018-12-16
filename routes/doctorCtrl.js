const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../models');

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
            return res.status(500).json({'error' : 'unable to create user   '});
          })
          })
        });
      }
      else{
        return res.status(409).json({'error' : 'user already exists'});
      }

    })
    .catch((err)=> {
      return res.status(500).json({'error' : 'unable to verify user   '});
    })
  },
  login: (req, res) => {

  }

}
