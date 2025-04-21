const express = require('express');
const app = express();
const port = 5000;

let botStatus = 'offline';

app.use(express.json());

app.get('/status', (req, res) => {
  res.json({ status: botStatus });
});

app.post('/start', (req, res) => {
  botStatus = 'online';
  res.json({ message: 'Bot iniciado.' });
});

app.post('/stop', (req, res) => {
  botStatus = 'offline';
  res.json({ message: 'Bot parado.' });
});

app.listen(port, () => {
  console.log(`Servidor backend rodando em http://localhost:${port}`);
});
