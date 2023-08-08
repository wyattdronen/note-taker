const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const notes = require('../db/db.json');
// GET
router.get('/api/notes', (req, res) => {
  res.json(notes);
});
// POST
router.post('/api/notes', (req, res) => {
  const {topic, text} = req.body;
  if (topic && text) {
    const newNote = {
      topic,
      text,
      id: uuidv4()
    };
    notes.push(newNote);
    let noteString = JSON.stringify(notes);

    fs.writeFileSync('db/db.json', noteString);
  }
});
// DELETE
router.delete('/api/notes/:id', (req, res) => {
  const {id} = req.params;
  fs.readFileSync('db/db.json', 'utf8', (err, data) => 
  err ? console.error(err) : notes = JSON.parse(data));
  const newNotes = dataJSON.filter((note) => {
    return note.id !== id;
  });
fs.writeFileSync('db/db.json', JSON.stringify(newNotes));
res.json("note deleted");
});


module.exports = router;
