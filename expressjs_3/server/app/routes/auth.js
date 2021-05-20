const express = require('express');
const router = express.Router();
const logger = require('@utils/logger');

router.post('/login', function (req, res, next) {
  // logger.debug(res);
  console.log('login!!!!!!!!!!!');
  res.send('respond with a resource');
});

module.exports = router;
