// imports
const express = require("express");
const app = express();


app.get('/', (req, res) => {
    //res.setHeader('Content-Type', 'text/html');
    res.send('<h>hello world!</h>');
})


app.listen(3000, (error) => {
    if (error) {
        console.log(error);
    }
    console.log('server running');
})