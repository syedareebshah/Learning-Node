const express = require('express');
const bodyParser = require('body-parser');

const dish_Id = express.Router();

dish_Id.use(bodyParser.json());

dish_Id.route('/:dishId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
    });

module.exports = dish_Id;