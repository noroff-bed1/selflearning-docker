const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/add/:number1/:number2', (req, res) => {
  res.json(parseInt(req.params.number1) + parseInt(req.params.number2));
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});