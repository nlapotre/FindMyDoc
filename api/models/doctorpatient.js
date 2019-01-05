'use strict';
module.exports = (sequelize, DataTypes) => {
  const DoctorPatient = sequelize.define('DoctorPatient', {
    doctorId: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER
  }, {});
  DoctorPatient.associate = function(models) {
    // associations can be defined here

  };
  return DoctorPatient;
};
