const express = require('express');
const app = express();


const usuarios = ['Milena', 'Hiandara', 'Melani'];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));