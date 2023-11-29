const express = require('express');
const path = require('path');
const cors = require('cors');
const sql = require('mssql');

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true,
    }
};

const app = express();
const port = 3000;

app.use(cors());

// Conectar ao banco de dados no início
sql.connect(config)
    .then(() => {
        console.log('Conectado ao banco de dados');
    })
    .catch((err) => {
        console.error('Erro ao conectar ao banco de dados', err);
    });

app.use(express.static(path.join(__dirname, 'public')));

// Rota para obter times do banco de dados
app.get('/api/times', async (req, res) => {
    try {
        const result = await sql.query('SELECT * FROM times');
        res.json(result.recordset);
    } catch (error) {
        console.error('Erro na solicitação para o banco de dados:', error);
        res.status(500).json({ error: 'Erro na solicitação para o banco de dados' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
