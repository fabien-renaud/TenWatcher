//DATA MODEL

const mongoose = require('mongoose');

let DataSchema = new mongoose.Schema({
   mac: { type: String, maxlength: 17 },
   ip: { type: String, maxlength: 15 },
   date: { type: Date },
   cpu: { type: Number },
   ram: { type: Number }
});

mongoose.model('Data', DataSchema);
