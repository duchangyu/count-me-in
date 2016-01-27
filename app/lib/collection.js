Customers = new Mongo.Collection('customers');

Customers.allow({
    insert : function() {
        return true;
    }
});

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
        },
        autoform : {
            type : 'hidden'
        }
    }

});

Customers.attachSchema(Schemas.Customer)