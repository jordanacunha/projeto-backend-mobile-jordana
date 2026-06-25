const express = require('express');
const app = express();

// Rota inicial (raiz)
app.get('/', (req, res) => {
  res.send('Seja bem-vindo ao Sistema de Organização Escolar!');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});