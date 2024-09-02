const express = require('express');
const apiNotesRouter = express.Router();
const { readFile, appendToDatabase, deleteNoteFromDatabase } = require('../utility/routerUtil');
const {v4: uuidv4} = require('uuid')

// Add json parser middleware
apiNotesRouter.use(express.json())

// Add GET endpoint handling
apiNotesRouter.get('/', (req, res) => {
  console.log('/api/notes GET call received');
  const apiNotesRouterData = readFile('/db/db.json', true);
  res.status(200).send(apiNotesRouterData);
})

// Add POST endpoint handling
apiNotesRouter.post('/', (req, res) => {
  console.log('/api/notes POST call received');
  const { title, text } = req.body;
  
  if(title && text){
    appendToDatabase({ title: title, text: text, id: uuidv4()});
  }
  
  res.status(200).send();
})

// Add DELETE handling
apiNotesRouter.delete('/:id', (req, res) => {
  console.log('/api/notes DELETE call received');
    const noteId = req.params.id;
    deleteNoteFromDatabase(noteId);
    res.status(200).send();
});

module.exports = apiNotesRouter;