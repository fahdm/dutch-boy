var express = require('express');
var router = express.Router();

const customersCtrl = require('../controllers/customers');

// GET /customers/new

router.get('/new', customersCtrl.new);

// POST/customers

router.post('/', customersCtrl.create);

router.get('/',customersCtrl.index);

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
