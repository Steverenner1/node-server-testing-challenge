const express = require('express');

const Cars = require('../cars/carModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up', environment: process.env.DB_ENV });
});

server.get('/cars', (req, res) => {
  Cars.getAll()
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;