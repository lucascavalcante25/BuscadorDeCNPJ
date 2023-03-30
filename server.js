const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());

app.get('/cnpj/:cnpj', async (req, res) => {
  const { cnpj } = req.params;
  const response = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
