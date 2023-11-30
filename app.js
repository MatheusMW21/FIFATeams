const express = require('express');
const path = require('path');
const cors = require('cors');
const sql = require('mssql/msnodesqlv8')
require('dotenv').config();

const config = {
    user: 'sa',
    password: '951237468',
    server: 'MATHEUS',
    database: 'FifaTeams',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true,
        useUTC: false,
        enableArithAbort: true,
        options: {
            trustedConnection: true,
            dsn: 'MySqlServerDSN', // Use o nome da sua fonte de dados aqui
        },
    },
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
