

Template.customers.onCreated(function() {

    var self = this;
    self.autorun(function(){
        self.subscribe('Customers');
    })
});

Template.customers.helpers({
    customers : function(){

        return Customers.find({},{sort : {createAt : -1}});
    }

});