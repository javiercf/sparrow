var router = require('express').Router();

router.use('/officials', require('./official'));

module.exports = router;
