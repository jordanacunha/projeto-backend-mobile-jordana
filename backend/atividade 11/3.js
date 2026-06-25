const express = require('express');
const app = express();

app.get('/equipe', (req, res) => {
  res.send('Desenvolvido pela Turma 3T: Jordana, Melani, Milena, Hiandara.');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});