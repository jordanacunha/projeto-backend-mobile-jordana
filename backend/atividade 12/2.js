const express = require('express');
const app = express();

const tarefas = [
  'Estudar para a prova de História',
  'Entregar o relatório de Química',
  'Terminar o código de HTML'
];

app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));