const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const sequelize = require('./database/sequelize');
const rutas = require('./routes/rutas');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public')); // Permite que el HTML cargue el CSS correctamente

app.use('/api', rutas);

sequelize.sync().then(() => {
    app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));
}).catch(err => console.error('Error de BD:', err));