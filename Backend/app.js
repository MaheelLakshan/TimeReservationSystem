const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const cors = require('cors');
app.use(cors());
const bcrypt = require('bcryptjs');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');

const JWT_SECRET =
  'hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe';

const mongoUrl =
  'mongodb+srv://maheellakshanra:maheellakshanra@cluster0.inbpwyq.mongodb.net/';

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connected to database');
  })
  .catch((e) => console.log(e));

require('./Models/userDetails.js');
require('./Models/requestedUsers.js');
require('./imageDetails');

app.listen(5000, () => {
  console.log('Server Started');
});

const User = mongoose.model('UserInfo');
// const RequestedUsers = mongoose.model('requestedUsers');

const Images = mongoose.model('ImageDetails');

app.post('/register', async (req, res) => {
  const { userName, email, password, userType } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: 'User Exists' });
    }
    await User.create({
      userName,
      email,
      password: encryptedPassword,
      permission: false,
      userType,
    });

    res.send({ status: 'ok' });
  } catch (error) {
    res.send({ status: 'error' });
  }
});
app.post('/addUser', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.send({ status: 'ok', message: 'User added successfully!' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: 'error', message: 'Failed to add user.' });
  }
});

app.post('/updatePermission', async (req, res) => {
  const { id, permission } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { permission },
      { new: true }
    );
    if (!updatedUser) {
      return res
        .status(404)
        .send({ status: 'error', message: 'User not found' });
    }
    res.send({ status: 'ok', data: updatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: 'error', message: 'Internal server error' });
  }
});

app.post('/login-user', async (req, res) => {
  const { userName, password } = req.body;

  const user = await User.findOne({ userName });
  if (!user) {
    // console.log(user);
    return res.json({ error: 'User Not found' });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ userName: user.userName }, JWT_SECRET, {
      expiresIn: '15m',
    });

    if (res.status(201)) {
      return res.json({ status: 'ok', data: user });
    } else {
      return res.json({ error: 'error' });
    }
  }
  res.json({ status: 'error', error: 'InvAlid Password' });
});

app.post('/userData', async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if (err) {
        return 'token expired';
      }
      return res;
    });
    // console.log(user);
    if (user == 'token expired') {
      return res.send({ status: 'error', data: 'token expired' });
    }

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: 'ok', data: data });
      })
      .catch((error) => {
        res.send({ status: 'error', data: error });
      });
  } catch (error) {}
});

app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: 'User Not Exists!!' });
    }
    const secret = JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: '5m',
    });
    const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'adarsh438tcsckandivali@gmail.com',
        pass: 'rmdklolcsmswvyfw',
      },
    });

    var mailOptions = {
      from: 'youremail@gmail.com',
      to: 'thedebugarena@gmail.com',
      subject: 'Password Reset',
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    console.log(link);
  } catch (error) {}
});

app.get('/reset-password/:id/:token', async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: 'User Not Exists!!' });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render('index', { email: verify.email, status: 'Not Verified' });
  } catch (error) {
    console.log(error);
    res.send('Not Verified');
  }
});

app.post('/reset-password/:id/:token', async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: 'User Not Exists!!' });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );

    res.render('index', { email: verify.email, status: 'verified' });
  } catch (error) {
    console.log(error);
    res.json({ status: 'Something Went Wrong' });
  }
});

app.get('/getAllUser', async (req, res) => {
  try {
    const allUser = await User.find({});
    res.send({ status: 'ok', data: allUser });
  } catch (error) {
    console.log(error);
  }
});

app.post('/deleteUser', async (req, res) => {
  const { userid } = req.body;
  try {
    User.deleteOne({ _id: userid }, function (err, res) {
      console.log(err);
    });
    res.send({ status: 'Ok', data: 'Deleted' });
  } catch (error) {
    console.log(error);
  }
});

app.post('/upload-image', async (req, res) => {
  const { base64 } = req.body;
  try {
    await Images.create({ image: base64 });
    res.send({ Status: 'ok' });
  } catch (error) {
    res.send({ Status: 'error', data: error });
  }
});

app.get('/get-image', async (req, res) => {
  try {
    await Images.find({}).then((data) => {
      res.send({ status: 'ok', data: data });
    });
  } catch (error) {}
});

app.get('/paginatedUsers', async (req, res) => {
  const allUser = await User.find({});
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;

  const results = {};
  results.totalUser = allUser.length;
  results.pageCount = Math.ceil(allUser.length / limit);

  if (lastIndex < allUser.length) {
    results.next = {
      page: page + 1,
    };
  }
  if (startIndex > 0) {
    results.prev = {
      page: page - 1,
    };
  }
  results.result = allUser.slice(startIndex, lastIndex);
  res.json(results);
});
