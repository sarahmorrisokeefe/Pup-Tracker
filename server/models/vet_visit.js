'use strict';
module.exports = (sequelize, DataTypes) => {
  var vet_visit = sequelize.define('vet_visit', {
    date: DataTypes.DATE,
    vaccines: DataTypes.STRING,
    medicine_administered: DataTypes.STRING,
    notes: DataTypes.TEXT
  }, {tableName: "vet_visit", timestamps: true});
  return vet_visit;
};