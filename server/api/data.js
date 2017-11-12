const router = require('express').Router();
const mongoose = require('mongoose');

const Data = mongoose.model('Data');
const Computer = mongoose.model('Computer');

router.post('/', (req, res) => {
    let data = new Data();
    data.mac = data.mac;
    data.ip = data.ip;
    data.date = data.date;
    data.cpu = data.cpu;
    data.ram = data.ram;

    data.save()
});

module.exports = router;
