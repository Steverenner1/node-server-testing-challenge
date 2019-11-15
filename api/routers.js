const Car = require('../cars/carModel')
const express = require('express');

const router = express();
router.post('/add', (req, res) => {
    const item = req.body;

    Car.add(item)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(err => {
        res.status(500).json(err)
    })
})