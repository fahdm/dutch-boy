const Customer = require('../models/customer');

module.exports = {

    new: newCustomer,
    create,
    index,
    delete:deleteCustomer,
    show,
    edit,
    update
}

function newCustomer(req, res) {
    res.render('customers/new', { errorMsg: '' });

};

// using the customer model to create the 
// customer submitted by the form.
async function create(req, res) {

    try {
        await Customer.create(req.body)

        console.log(req.body);


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

async function deleteCustomer(req,res){
    try {

        const customers = await Customer.deleteOne({_id:req.params.id});
        res.redirect('/customers');
        
    } catch (error) {
        
        res.render('error', { message: 'Error deleting customers', error });
    }
}

async function show(req,res){

    try { 

        const customer = await Customer.findById(req.params.id);
        res.render('customers/show', {title: 'Customer Details', customer});
        
    } catch (error) {
        
        res.render('error', { message: 'Cannot find customer', error });
    }

}

async function edit(req, res) {
    try {
      const customer = await Customer.findById(req.params.id);
      res.render('customers/edit', { title: 'Edit Customer', customer });
    } catch (error) {
      res.render('error', { message: 'Cannot find customer', error });
    }
  }

  async function update(req, res) {
    try {
      await Customer.findByIdAndUpdate(req.params.id, req.body);
      res.redirect(`/customers/${req.params.id}`);
    } catch (error) {
      res.render('error', { message: 'Error updating customer', error });
    }
  }