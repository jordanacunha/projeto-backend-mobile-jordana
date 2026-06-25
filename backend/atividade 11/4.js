const express = require('express');
const app = express();

app.get('/contato', (req, res) => {
  res.send('Para dúvidas ou sugestões, envie um e-mail para suporte@escola.com ou fale com a coordenação.');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});