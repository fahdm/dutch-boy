var express = require('express');
var router = express.Router();

const customersCtrl = require('../controllers/customers');

// GET /customers/new

router.get('/new', customersCtrl.new);

// POST/customers

router.post('/', customersCtrl.create);

router.get('/',customersCtrl.index);

// POST/customers/:id/delete
router.post('/:id/delete', customersCtrl.delete);

//GET/customers/:id
router.get('/:id',customersCtrl.show);

//GET/customers/:id/edit

router.get('/:id/edit', customersCtrl.edit);

//PUT/:id/update

router.put('/:id', customersCtrl.update);


module.exports = router;
