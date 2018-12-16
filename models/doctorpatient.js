'use strict';
module.exports = (sequelize, DataTypes) => {
  const DoctorPatient = sequelize.define('DoctorPatient', {
    idDoctors: DataTypes.INTEGER,
    idPatients: DataTypes.INTEGER
  }, {});
  DoctorPatient.associate = function(models) {
    // associations can be defined here
    DoctorPatient.belongsTo(models.Doctor, {
      foreignKey: 'DoctorId',
    });
    DoctorPatient.belongsTo(models.Patient, {
      foreignKey: 'PatientId',
    });
  };
  return DoctorPatient;
};
