const Customer = require('../models/customer');

module.exports = {

    new: newCustomer,
    create
}

function newCustomer(req, res) {
    res.render('customers/new', { errorMsg: '' });

};

async function create(req, res) {

    try {
        await Customer.create(req.body)

        console.log(req.body);

   // Next step is to display the customer information

        //res.redirect('/customers')

    } catch (error) {
        res.render('error', { message: 'error', error });
    }


};