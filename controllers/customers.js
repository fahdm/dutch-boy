const Customer = require('../models/customer');

module.exports = {

    new: newCustomer,
    create,
    index
}

function newCustomer(req, res) {
    res.render('customers/new', { errorMsg: '' });

};

// using the customer model to create the 
// customer submitted by the form.
async function create(req, res) {

    try {
        await Customer.create(req.body)


   // Next step is to display the customer information

        res.redirect('/customers')

    } catch (error) {
        res.render('error', { message: 'error', error });
    }


};


// use index function to read and display the documents 
// from mongoDB

async function index(req, res) {
    try {
        const customers = await Customer.find();
        res.render('customers/index', { customers });
    } catch (error) {
        res.render('error', { message: 'Error fetching customers', error });
    }
}