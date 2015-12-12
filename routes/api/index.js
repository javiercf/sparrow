var router = require('express').Router();

router.use('/officials', require('./official'));
router.use('/votes', require('./vote'));

module.exports = router;
