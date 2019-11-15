const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

function insert(car) {
  return db('cars').insert(car, 'id').then(([id]) => {
    return db("cars").where({ id }).first();
  });
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('hobbits');
}

function findById(id) {
  return null;
}