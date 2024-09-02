const express = require('express');
const apiNotesRouter = express.Router();
const { readFile, appendToDatabase, deleteNoteFromDatabase } = require('../utility/routerUtil');
const {v4: uuidv4} = require('uuid')

// Add json parser middleware
apiNotesRouter.use(express.json())

// Add GET endpoint handling
apiNotesRouter.get('/', (req, res) => {
  const apiNotesRouterData = readFile('/db/db.json', true);
  res.send(apiNotesRouterData);
})

// Add POST endpoint handling
apiNotesRouter.post('/', (req, res) => {
  console.log('in post')
  console.log(req.body);
  const { title, text } = req.body;

  if(title && text){
    appendToDatabase({ title: title, text: text, id: uuidv4()});
  }

  res.status(200).send();
  // title: noteTitle.value,
  // text: noteText.value
})

// Add DELETE handling
apiNotesRouter.delete('/:id', (req, res) => {
    const noteId = req.params.id;
    deleteNoteFromDatabase(noteId);
    res.status(200).send();
});

module.exports = apiNotesRouter;