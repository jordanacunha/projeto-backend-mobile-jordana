const express = require('express');
const app = express();

const reservas = [
  { espaco: 'Laboratório de Informática', horario: '14:00' },
  { espaco: 'Quadra', horario: '15:30' }
];

app.get('/reservas', (req, res) => {
  res.json(reservas);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));