// https://www.npmjs.com/package/supertest

const express = require('express');
const router = express.Router();
const logger = require('@utils/logger');
const fileReader = require('@utils/fileReader');

router.get('/datas', function (req, res, next) {
  const dataJson = fileReader.readJsonFile(__dirname, 'sample-data.json');
  res.json(dataJson);
});

router.post('/datas', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
