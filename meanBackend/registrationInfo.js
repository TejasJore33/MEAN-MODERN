const mongoose = require('mongoose');

const registrationInfoSchema = new mongoose.Schema({
  emailOrUsername: String,
  password: String,
});

module.exports = mongoose.model('RegistrationInfo', registrationInfoSchema);
