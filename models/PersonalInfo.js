// models/PersonalInfo.js (Create a new model for personal info)
const mongoose = require('mongoose');
const { Schema } = mongoose;

const PersonalInfoSchema = new Schema({
  firstName: String,
  lastName: String,
  emailadd: String,
  contactnumber: String,
  civilstatus: String,
  gender: String,
  birthday: String,
  regionorigin: String,
  province: String,
  residence: String,
});

const PersonalInfoModel = mongoose.model('PersonalInfo', PersonalInfoSchema);

module.exports = PersonalInfoModel;
