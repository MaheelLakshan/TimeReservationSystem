const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
  {
    title: { type: String },
    id: { type: Number }, // Use 'Number' instead of 'integer'
    description: { type: String },
    RepeatStart: { type: Date }, // Specify the type for 'RepeatStart'
    RepeatEnd: { type: Date },
    start: { type: Date },
    end: { type: Date },
    createdBy: { type: String },
    creationTime: { type: Date },
    place: { type: String },
    // Add more fields as needed
  },

  {
    collection: 'EventInfo',
  }
);





mongoose.model('EventInfo', EventSchema);
