const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de la conexión a PostgreSQL usando las variables de entorno
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({
            status: 'Conectado a PostgreSQL correctamente',
            timestamp: result.rows[0].now
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error conectando a la Base de Datos');
    }
});

app.listen(PORT, () => {
    console.log(`Backend iniciado y escuchando en el puerto ${PORT}`);
});