const mongoose = require('mongoose');

const UserDetailsScehma = new mongoose.Schema(
  {
    userName: String,
    email: { type: String, unique: true },
    password: String,
    permission: Boolean,
    userType: String,
  },
  {
    collection: 'UserInfo',
  }
);

mongoose.model('UserInfo', UserDetailsScehma);
