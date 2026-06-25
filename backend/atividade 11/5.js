const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
  res.send('<h1>Painel Principal</h1><p>Escolha uma rota para navegar: /projeto, /ajuda ou /status.</p>');
});

app.get('/projeto', (req, res) => {
  res.send('<h2>Sobre o Projeto</h2><p>Criado para resolver a desorganização de prazos escolares.</p>');
});

app.get('/ajuda', (req, res) => {
  res.send('<h2>Central de Ajuda</h2><p>Precisa de suporte? Procure o representante da sua turma.</p>');
});


app.listen(PORT, () => {
  console.log(`Servidor completo rodando em http://localhost:${PORT}`);
});