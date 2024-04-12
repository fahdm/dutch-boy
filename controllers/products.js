const Customer = require('../models/customer');
const Product = require('../models/product');


module.exports = {

    new:newProduct,
    create
};

function newProduct(req,res){

    res.render('products/new', { errorMsg: '' });
};




async function create(req, res) {
    try {
        // Create a new product instance using the request body
        const product = new Product(req.body);
        // Save the product document to the database
        await product.save();
        // Redirect to the new product page
        res.redirect('/products/new');
    } catch (error) {
       res.render('error', { message: 'error', error });
    }
};
