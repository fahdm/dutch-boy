const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema ({

name: {
    type: String,
    required: true

},

street: {
    type:String,
    match: /[A-F][1-9]\d?/

},

city: {
    type: String,
    required: true

},

zipcode:{
    type: String,
    required:true,
    match: /^\d{5}(?:-\d{4})?$/
},

phone: {
    type:String,
    required:true,
    min:10,
    max:11
},

email: String,
notes: String,
},
{
    timestamps:true
}

);

module.exports = mongoose.model('Customer', customerSchema);