const mongoose = require('mongoose');

const RequestedUserDetailsScehma = new mongoose.Schema(
  {
    userName: String,
    email: { type: String, unique: true },
    password: String,
    userType: String,
  },
  {
    collection: 'requestedUsers',
  }
);

mongoose.model('requestedUsers', RequestedUserDetailsScehma);
