
//import dependence
const express = require('express');

//initiate the express
const server = express()

//create rote
server.get('/', () => {
    console.log('oi')
})

//turn on the server
server.listen(5500)

