const router = require('express').Router();
const mongoose = require('mongoose');

const Data = mongoose.model('Data');
const Computer = mongoose.model('Computer');

router.get('/', (req, res) => {
    let query = Data.find();
    if(req.query.mac) { query.where("mac").equals(req.query.mac); }
    query.exec(function(err, data) {
        if (!data) { return res.sendStatus(404); }
        return res.json(data);
    });
});

// router.post('/', (req, res) => {
//     let data = new Data();
//     data.mac = data.mac;
//     data.ip = data.ip;
//     data.date = data.date;
//     data.cpu = data.cpu;
//     data.ram = data.ram;
//
//     data.save()
// });

module.exports = router;
