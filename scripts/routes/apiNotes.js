const express = require('express');
const apiNotesRouter = express.Router();
const { readFile, appendToDatabase } = require('../utility/routerUtil');
const uu = require('uuid')

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
    appendToDatabase({ title: title, text: text, id: uu.uuidv4()});
  }

  res.status(200).send();
  // title: noteTitle.value,
  // text: noteText.value
})

module.exports = apiNotesRouter;