const express = require('express');
const cors = require('cors');
const app = express();
const { mongoose } = require('mongoose');
const User = require('./models/User');
const PersonalInfo = require('./models/PersonalInfo');
const EducationalAttainment = require('./models/EducationalAttainment');

require('dotenv').config();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000', // Update with your frontend URL
  })
);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log(process.env.MONGO_URL);

app.get('/test', (req, res) => {
  res.json('Test Works');
});

// Register Route for User Info
app.post('/user-info', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userInfo = await User.create({
      username,
      email,
      password,
    });
    res.json(userInfo);
  } catch (error) {
    res.status(422).json(error);
  }
});

// Register Route for Personal Info
app.post('/personal-info', async (req, res) => {
  const {
    firstName,
    lastName,
    emailadd,
    contactnumber,
    civilstatus,
    gender,
    birthday,
    regionorigin,
    province,
    residence,
  } = req.body;
  try {
    // Create a model for Personal Info and save it to the database
    // Replace 'PersonalInfo' and the schema with your actual model and schema
    const personalInfo = await PersonalInfo.create({
      firstName,
      lastName,
      emailadd,
      contactnumber,
      civilstatus,
      gender,
      birthday,
      regionorigin,
      province,
      residence,
    });
    res.json(personalInfo);
  } catch (error) {
    res.status(422).json(error);
  }
});

// Register Route for Educational Attainment
app.post('/educational-attainment', async (req, res) => {
  const { educattainment, profexam } = req.body;
  try {
    // Create a model for Educational Attainment and save it to the database
    // Replace 'EducationalAttainment' and the schema with your actual model and schema
    const educationalAttainment = await EducationalAttainment.create({
      educattainment,
      profexam,
    });
    res.json(educationalAttainment);
  } catch (error) {
    res.status(422).json(error);
  }
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
