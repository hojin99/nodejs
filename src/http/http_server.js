'use strict'

const express = require('express');

const app = express();
const port = 3000;

const myLogger = (req, res, next) => {
    console.log('Logged!');
    next();
}

app.use(myLogger);

app.get('', (req,res) => {
    res.send('Hello World!!!');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

