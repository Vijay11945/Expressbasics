const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/',(req, res, next) => {
    //console.log('In another middleware!');
    //res.send( { key1: 500 })
   // res.send('<h1>Hello from Vijay!</h1>');
   res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports = router;