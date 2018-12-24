'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    patientId: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER,
    appDate: DataTypes.STRING,
    appTime: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  Appointment.associate = function(models) {
    // associations can be defined here
  };
  return Appointment;
};
