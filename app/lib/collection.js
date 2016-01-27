Customers = new Mongo.Collection('customers');

var Schemas = {};

Schemas.Customer = new SimpleSchema({
   name : {
       type : String,
       label : 'Name',
       max : 50
   },
    email : {
        type : String,
        label : 'Email'
    },
    createAt : {
        type: Date,
        autoValue : function(){
            return new Date();
        }
    }

});

Customers.attachSchema(Schemas.Customer)