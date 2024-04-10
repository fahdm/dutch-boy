var express = require('express');
var router = express.Router();

const customerCtrl = require('../controllers/customers');

// GET /customers/new

router.get('/new', customerCtrl.new);

// POST/customers

router.post('/', customerCtrl.create);

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
