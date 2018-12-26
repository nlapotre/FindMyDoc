'use strict';
module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('Doctor', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    specialty: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    mail: DataTypes.STRING,
    tel: DataTypes.STRING
  }, {});
  Doctor.associate = function(models) {
    // associations can be defined here
  };
  return Doctor;
};
