const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken');
const routes = require("./router/router")
const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.listen(3000, function () {
    console.log('listening to port 3000')
})

app.get('/', (req, res) => {
    res.render('home', { name: 'Akashdeep' });
});

app.use(routes)