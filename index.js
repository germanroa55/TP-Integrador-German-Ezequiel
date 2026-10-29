const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const sequelize = require('./database');
const rutas = require('./rutas');

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Usar las rutas
app.use('/api', rutas);

// Sincronizar base de datos y levantar servidor
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Servidor corriendo en el puerto 3000');
    });
});