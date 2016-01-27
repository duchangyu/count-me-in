Meteor.publish('Customers',function(){

    return Customers.find();
});