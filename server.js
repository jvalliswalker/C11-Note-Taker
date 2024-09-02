const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const router = require('./scripts/routes/router');
const path = require('path');

app.use('/api', router);
app.use(express.static('public'))

app.get('/notes', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/public/notes.html'));
});

app.listen(PORT, () => {
  console.log(`Listening at port https://localhost:${PORT}`)
});