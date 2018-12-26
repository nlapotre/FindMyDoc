'use strict';
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    mail: DataTypes.STRING,
    tel: DataTypes.STRING
  }, {});
  Patient.associate = function(models) {
    // associations can be defined here
  };
  return Patient;
};
