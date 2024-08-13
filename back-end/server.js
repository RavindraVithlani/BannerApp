const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mysql2/promise');
require('dotenv').config();
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const pool = sql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
});
async function createDB() {
    try {
        let connection = await sql.createConnection({
            host: process.env.HOST,
            user: process.env.USER
        });
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB}`);
        connection.end();
    } catch (error) {
        console.error('Creating Database Error:', error);
    } 
}



db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database.');
});

// Get banner details
app.get('/api/banner', (req, res) => {
    db.query('SELECT * FROM banners ORDER BY id DESC LIMIT 1', (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
});

// Update banner details
app.post('/api/banner', (req, res) => {
    const { is_visible, description, timer, link } = req.body;
    db.query(
        'INSERT INTO banners (is_visible, description, timer, link) VALUES (?, ?, ?, ?)',
        [is_visible, description, timer, link],
        (err, result) => {
            if (err) throw err;
            res.json({ message: 'Banner updated successfully.' });
        }
    );
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`On port ${PORT}`);
});