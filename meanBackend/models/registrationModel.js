const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  emailOrUsername: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
   confirmPassword: {
    type: String,
    required: true,
  },
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
