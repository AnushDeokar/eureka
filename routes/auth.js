const express = require('express');
const router = express.Router();
const path = require('path');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const port = process.env.PORT || 3000
const User = require('../server/models/userModel')
var bodyParser = require('body-parser')
const mongoose = require("mongoose");

router.get('/', (req, res) => {
    res.send('Hello')
})


var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post("/signup", urlencodedParser, async (req, res)=>{

    let userData = req.body 
    console.log(userData);
    userData.password = await bcrypt.hash(req.body.password, 10); 
    
    let user = new User(userData)
    user._id = new mongoose.Types.ObjectId()

    user.save()
        .then(
            result => {
                res.json({
                    message: 'User register success',
                    status: true,
                    send: (userData)
                })
            }
        )
        .catch(
            error => {
                res.json({
                    message: error,
                    status: false,
                })
            }
        )
});

router.get('/signup', (req, res)=>{
    res.render('signup');
})


router.get('/login', (req, res)=>{

})


module.exports = router;