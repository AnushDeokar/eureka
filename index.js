const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000
const app = express()
const mongoose = require("mongoose");
const auth = require('./routes/auth');
mongoose.connect("mongodb://localhost:27017/AuthDB")


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('/static'));
app.use(express.static(__dirname + '/public'));
app.use('/auth', auth);


app.get('/', (req, res)=>{
    res.render("about");
})


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})