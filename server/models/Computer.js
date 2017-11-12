const mongoose = require('mongoose');
const Data = mongoose.model('Data');

let ComputerSchema = new mongoose.Schema({
   name: { type: String, required: [true, "can't be blank"] },
   _id: { type: String, maxlength: 17, index: true }
});

mongoose.model('Computer', ComputerSchema);
