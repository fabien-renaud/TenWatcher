//Import dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mqtt = require('mqtt');

//Connect to mongoDB server
mongoose.connect('mongodb://localhost/tenodata');
mongoose.set('debug', true);

//Require the models
require('./server/models/data');
require('./server/models/computer');

//Get our API routes
const api = require('./server/api/');

//Init express
const app = express();

//Set API routes
app.use('/api', api);

//Enable bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Enable CORS
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
 next();
});

//Static path to dist
app.use(express.static(path.join(__dirname, 'app/dist')));

//Catch all other routes and return to the index file
app.get('*', (req, res) =>{
   res.sendFile(path.join(__dirname, 'app/dist/index.html'));
})

//Get environment port or use 3000
const port = process.env.PORT || '3000';
app.set('port', port);

//Create HTTP server.
const server = http.createServer(app);

//Listen on port
server.listen(port);

//Connect to MQTT Broker
const client  = mqtt.connect('http://192.168.1.100');

//Subscribe to tenodata topic
client.on('connect', function () {
  client.subscribe('tenodata');
})

//Models instantiation
const Data = mongoose.model('Data');
const Computer = mongoose.model('Computer');

// // Drop Data db
// Data.remove({}, function(err) {
//   console.log("removed");
// });
//
// // Drop Computer db
// Computer.remove({}, function(err) {
//   console.log("removed");
// });
//
// Data.find().exec(function(err, res) {
//   console.log(res);
// });
//
// Computer.find().exec(function(err, res) {
//   console.log(res);
// });

//Save MQTT messages into Data db
client.on('message', function (topic, message) {
    //Parse MQTT message
    let data = JSON.parse(message.toString());

    //Instantiate new Data and fill fields
    let datadb = new Data();
    datadb.mac = data.mac;
    datadb.ip = data.ip;
    datadb.date = data.date;
    datadb.cpu = data.cpu;
    datadb.ram = data.ram;

    //Save Data in db
    datadb.save()

    //Verify if publisher is registred
    Computer.find().where("_id").equals(data.mac).exec(function(err, res) {
      if(res.length === 0) {
        //Registry new computer
        let computerdb = new Computer();
        computerdb.name = data.mac;
        computerdb._id = data.mac;
        computerdb.ip = data.ip;

        computerdb.save();
      }
    });
})
