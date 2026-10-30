const express = require('express');
const router = express.Router();
const Producto = require('../models/productos.js');

// 1. Endpoint para traer todos los productos activos
router.get('/productos', async (req, res) => {
    try {
        const productos = await Producto.findAll({ where: { activo: true } });
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar productos' });
    }
});

// 2. Endpoint para filtrar por categoría ("perifericos" o "sillas")
router.get('/productos/categoria/:categoria', async (req, res) => {
    try {
        const { categoria } = req.params;
        const productos = await Producto.findAll({ where: { activo: true, categoria } });
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar la categoría' });
    }
});

// 3. Endpoint para dar de alta un producto nuevo
router.post('/productos', async (req, res) => {
    try {
        const { nombre, precio, categoria } = req.body;
        // El campo 'activo' se pone en true automáticamente por default
        // La 'imagen' la configuramos en la próxima etapa con Multer
        const nuevoProducto = await Producto.create({ nombre, precio, categoria });
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el producto' });
    }
});

module.exports = router;