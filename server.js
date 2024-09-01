const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/'))
});


app.listen(PORT, () => {
  console.log(`Listening at port https://localhost:${PORT}`)
});