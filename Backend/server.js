const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3001;

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
  'mongodb+srv://maheellakshanra:XAHKWCjpeAAcT0pX@cluster0.inbpwyq.mongodb.net/reservations',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const reservationSchema = new mongoose.Schema({
  place: String,
  start: Date,
  end: Date,
});

const Reservation = mongoose.model('Reservation', reservationSchema);

// Create a new reservation
app.post('/reservations', (req, res) => {
  const { place, start, end } = req.body;

  const newReservation = new Reservation({
    place,
    start,
    end,
  });

  newReservation.save((err, reservation) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to save reservation' });
    } else {
      res.json(reservation);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
