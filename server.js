const express = require('express');
const app = express();
const PORT = 6000;

app.use(express.json());

let items = [];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const novoItem = req.body;
  items.push(novoItem);
  res.status(201).json(novoItem);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
