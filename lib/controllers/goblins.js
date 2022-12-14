const { Router } = require('express');
const Goblin = require('../models/Goblin');

module.exports = Router()
  .post('/', (req, res, next) => {
    Goblin.insert(req.body)
      .then((goblin) => res.send(goblin))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Goblin.find()
      .then((goblins) => res.send(goblins))
      .catch(next);
  })
  .put('/:id', (req, res, next) => {
    Goblin.update(req.params.id, req.body)
      .then((goblin) => res.send(goblin))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Goblin.delete(req.params.id)
      .then((goblin) => res.send(goblin))
      .catch(next);
  });
