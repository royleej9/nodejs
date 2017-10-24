var express = require("express");
var router = express.Router();

router.get('/getTestData', function (req, res) {
    var data = {
        "name": "testName"
    }

    return res.json(data);
});

module.exports = router;