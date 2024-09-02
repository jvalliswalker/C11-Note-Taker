const express = require('express');
const apiNotesRouter = require('./apiNotes');
const router = express.Router();

router.use('/notes', apiNotesRouter);

module.exports = router;