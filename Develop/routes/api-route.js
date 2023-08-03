const route = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const notes = require('../db/db.json');

route.get('/notes', (req, res)=> {
    res.json(notes);
});

route.post('/notes', (req, res)=> {
    const {topic,text} = req.body;
    if (topic && text) {
        const newNote = {
            topic,
            text,
            topic_id: uuidv4(),
        };
    notes.push(newNote, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = route;