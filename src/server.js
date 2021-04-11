
// import dependence
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// initiate the express
const server = express()

server
    // using static files
    .use(express.static('public'))

    // set template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // create app rotes
    .get('/index', pages.index)
    .get('/hill', pages.hill)
    .get('/hills', pages.hills)
    .get('/create-hill', pages.createHill)


// turn on the server
server.listen(5500)

