var express = require("express");
var router = express.Router();

router.get('/', (request, response) => {
    response.end("hello I got Create.....");
});

module.exports = router;