var router = require('express').Router();

router.use('/data', require('./data'));
router.use('/computer', require('./computer'));

module.exports = router;
