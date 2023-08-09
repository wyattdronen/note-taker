const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const notes = require('../db/db.json');
// GET
router.get('/notes', (req, res) => {
  res.json(notes);
});
// POST
router.post('/notes', (req, res) => {
  const {title, text} = req.body;
  if (title && text) {
    const newNote = {
      topic,
      text,
      id: uuidv4(),
    };
    notes.push(newNote);
    let noteString = JSON.stringify(notes, null, 3);

    fs.writeFileSync('db/db.json', noteString, (err)=> 
    err 
    ? console.error(err) : console.log('Note added!')
    );
    const response = {
      status: 'success',
      body: newNote,
    };
  }
});
// DELETE
router.delete('/notes/:id', (req, res) => {
  const {id} = req.params;
  fs.readFileSync('db/db.json', 'utf8', (err, data) => 
  err ? console.error(err) : notes = JSON.parse(data));
  const deleteNote = notes.filter(note => note.id === req.params.id);
  if (deleteNote) {
    let filteredNotes = notes.filter(note => note.id !== req.params.id);
    let noteString = JSON.stringify(filteredNotes, null, 3);
    fs.writeFileSync('db/db.json', noteString, (err)=> err
    ? console.error(err) : console.log('Note deleted!'));
    
  }
  });

module.exports = router;
