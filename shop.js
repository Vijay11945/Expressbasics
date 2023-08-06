const express = require('express');

const router = express.Router();

router.get('/',(req, res, next) => {
    //console.log('In another middleware!');
    //res.send( { key1: 500 })
    res.send('<h1>Hello from Vijay!</h1>');
   
});

module.exports = router;