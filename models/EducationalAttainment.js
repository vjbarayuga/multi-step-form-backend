// models/EducationalAttainment.js (Create a new model for educational attainment)
const mongoose = require('mongoose');
const { Schema } = mongoose;

const EducationalAttainmentSchema = new Schema({
  educattainment: String,
  profexam: String,
});

const EducationalAttainmentModel = mongoose.model(
  'EducationalAttainment',
  EducationalAttainmentSchema
);

module.exports = EducationalAttainmentModel;
