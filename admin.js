const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const router = express.Router();


router.get('/app-pro',(req, res, next) => {
    //console.log('start the middleware!');
    //res.send('<form action = "/admin/app-pro" method ="POST"> <input type = "text" name = "title"><button type = "submit">ADD</button></form>');
    //next(); // Allows the request to continue to the next middleware in line
    res.sendFile(path.join(rootDir,'views','app-pro.html'));
});
 
router.post('/app-pro',(req, res, next) => {
    //console.log('In the middleware!');
    //res.send('<h1>Hello from Vijay Pro!</h1>');
    console.log(req.body);
    res.redirect('/');
    //next(); // Allows the request to continue to the next middleware in line
});

module.exports = router;