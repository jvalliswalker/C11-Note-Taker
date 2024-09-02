const express = require('express');
const notes = express.Router();
const readFile = require('../utility/routerUtil');


notes.use(express.json())

notes.get('/', (req, res) => {
  const notesData = readFile('../../db/db.json', true);
  res.send(notesData);
});

module.exports = notes;