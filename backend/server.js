// imports
const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());

let users = {};

app.use((req, res, next) => {
    const date = new Date();
    console.log(date.toISOString(), req.url);
    next();
})

app.get('/', (req, res) => {
    res.send('<h>hello world!</h>');
})

app.post('/', (req, res) => { // body parser is fucked, res is fucked
    const id = Object.keys(users).length;
    //for(let i of req.body) {
    //    console.log(i);
    //}
    console.log(req.body)
    res.status(200).send({response: 'received'});
})





app.listen(3000, (error) => {
    if (error) {
        console.log(error);
    }
    console.log('server running');
})