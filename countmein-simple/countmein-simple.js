
Customers = new Mongo.Collection('customers');

if (Meteor.isClient) {

  Template.addCustomers.helpers({


  });

  Template.addCustomers.events({
    'click button': function() {
      var customerName = document.getElementById('inputUsername').value;
      var customerEmail = document.getElementById('inputUseremail').value;

      console.log(customerName + ' - ' + customerEmail);

      if(Customers.find({email : customerEmail}).fetch().length > 0){
        alert('You have been with us already. thank you!')

      }else{

        Customers.insert({
          name : customerName,
          email : customerEmail,
          createAt : new Date()
        });

      }

      

    }
    
  });


  Template.body.helpers({
    'customers' : function(){

      return Customers.find({},{sort : {createAt : -1}});

    }

  });



}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
