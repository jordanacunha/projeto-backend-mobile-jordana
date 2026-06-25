const express = require('express');
const app = express();

app.get('/sobre', (req, res) => {
  res.send('Este projeto é uma plataforma para centralizar avisos, tarefas e horários da escola, facilitando a vida dos alunos.');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});