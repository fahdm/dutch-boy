const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = require('./product')

const customerSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    street: String,
    city: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true,
        match: /^\d{5}(?:-\d{4})?$/
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 11
    },
    email: {
        type: String,
        
    },
    notes:{
     
        type:String

    } ,

    dateOfBirth:{
        type: Date
    },
    
    products:[{

        type: Schema.Types.ObjectId,
        ref:'Product'

    }],


}, {
    timestamps: true
});

module.exports = mongoose.model('Customer', customerSchema);
