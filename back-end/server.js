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




// Get banner details
app.get('/api/banner', async (req, res) => {
    try{
        const connection = await pool.getConnection();
        const [rows] = await connection.execute("SELECT * FROM dashboard ORDER BY id DESC LIMIT 1");
        connection.release();
        if (rows.length ==='0'){
            res.status(404).json({error:'no record found'});
        }
        else{
            res.json(rows[0]);
        }
    }
    catch(e){
        console.error('Error executing SQL:', e);
        res.status(500).json({ error: e.message });
    }
});

// Update banner details
app.post('/api/banner', async (req, res) => {
    const { is_visible, duration } = req.body;
    try{
        const connection = await pool.getConnection();
        const [rows] = await connection.execute('INSERT INTO dashboard (is_visible, description, timer, link) VALUES (?, ?)',[is_visible, duration]);
        connection.release();
        res.json({message:'success'});
    }
    catch(e){
        console.error('Error executing SQL:', e);
        res.status(500).json({ error: e.message });
    }
    
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`On port ${PORT}`);
});