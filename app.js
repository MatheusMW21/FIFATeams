const express = require('express');
const sqlite3 = require('sqlite3');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
const dbName = ':memory:';
const tableName = 'times';

const db = new sqlite3.Database(dbName);


db.serialize(() => {
    db.run(`CREATE TABLE ${tableName} (id INT, name TEXT, image TEXT, overall INT)`);
    const timesEx = [
        {   
            id: 1,
            name: 'Real Madrid', 
            image: 'https://logodetimes.com/wp-content/uploads/real-madrid.png',
            overall: 84
        },
        {   
            id: 2, 
            name: 'Barcelona', 
            image: 'https://logodetimes.com/wp-content/uploads/barcelona.png',
            overall: 83
        },
        {
            id: 3,
            name: 'Manchester City',
            image: '',
            overall: 84
        },
        {
            id: 4,
            name: 'Borussia Dortmund',
            image: '',
            overall: 80
        }
    ];
    const stmt = db.prepare('INSERT INTO times VALUES (?, ?, ?, ?)');
    timesEx.forEach(time => stmt.run(time.id, time.name, time.image, time.overall));
    stmt.finalize();
});

app.get('/api/times', (req, res) => {
    try {
        db.all('SELECT * FROM times', (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json(rows);
        });
    } catch (error) {
        console.error('Erro na solicitação para o banco de dados:', error);
        res.status(500).json({ error: 'Erro na solicitação para o banco de dados' });
    }
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});