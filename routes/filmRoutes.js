const express = require('express');
const filmController = require('../controllers/filmController');
const router = express.Router();


router.post('/', filmController.createFilme);


router.get('/', filmController.getFilmes);


router.put('/:id', filmController.updateFilme);


router.delete('/:id', filmController.deleteFilme);

module.exports = router;
