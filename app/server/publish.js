Meteor.publish('Customers',function(){

    //Meteor._sleepForMs( 5000);

    return Customers.find();
});