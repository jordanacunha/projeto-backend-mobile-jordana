const express = require('express');
const app = express();


const turmas = [
  '1º Ano A - Informática', 
  '2º Ano B - Edificações', 
  '3º Ano C - Química'
];


app.get('/turmas', (req, res) => {
  res.json(turmas);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});