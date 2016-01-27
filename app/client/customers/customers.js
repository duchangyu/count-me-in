Meteor.subscribe('Customers');

Template.customers.helpers({
    customers : function(){

        return Customers.find({},{sort : {createAt : -1}});
    }

});