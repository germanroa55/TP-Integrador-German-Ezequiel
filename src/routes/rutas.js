const express = require('express');
const router = express.Router();
const Producto = require('../models/productos');

// Traer todos los productos activos (postman)
router.get('/productos', async (req, res) => {
    try {
        const productos = await Producto.findAll({ where: { activo: true } });
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar productos' });
    }
});

// Filtrar por sillas o perifericos
router.get('/productos/categoria/:categoria', async (req, res) => {
    try {
        const { categoria } = req.params;
        const productos = await Producto.findAll({ where: { activo: true, categoria } });
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar la categoría' });
    }
});

module.exports = router;