const router = require('express').Router();
const mongoose = require('mongoose');

const Data = mongoose.model('Data');
const Computer = mongoose.model('Computer');

router.get('/', (req, res) => {
    Computer.find().exec(function(err, computer) {
        if (!computer) { return res.sendStatus(404); }
        return res.json(computer);
    });
});

router.put('/', (req, res) => {
    if (!req.query.id.match(/^[0-9a-f]{2}([\:]{1}[0-9a-f]{2}){5}/)) { return res.sendStatus(422); }

    Computer.findById(req.query.id).exec(function(err, computer) {
        computer.name = req.query.name;

        computer.save(() => {
            return res.sendStatus(200);
        })
    });
});

module.exports = router;
