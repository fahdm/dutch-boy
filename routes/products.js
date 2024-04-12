var express = require('express');
var router = express.Router();

const productsCtrl = require('../controllers/products');

// GET/products/new


router.get('/new', productsCtrl.new);

// POST/products

router.post('/', productsCtrl.create)

module.exports = router;