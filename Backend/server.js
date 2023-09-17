// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const app = express();
// const port = process.env.PORT || 3001;

// // Configure body-parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect(
//   // copy and paste the DB url below
//   'mongodb+srv://maheellakshanra:maheellakshara@cluster0.inbpwyq.mongodb.net/',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// const db = mongoose.connection;

// const Users = new mongoose.Schema({
//   name: {
//     type: String,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });
// const collection = mongoose.model('collection', Users);

// // ... The rest of your routes ...

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// db.once('open', () => {
//   console.log('Connected to MongoDB!');
//   // Add this line to show the successful connection
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
