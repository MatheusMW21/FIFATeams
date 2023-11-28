const express = require('express');
const app = express();
const port = 3000;

// Rotas
app.get('/api/times', (req, res) => {
    res.json(timesFIFA22);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
