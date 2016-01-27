

Template.customers.onCreated(function() {

    var self = this;
    self.autorun(function(){
        self.subscribe('Customers');
    })
});

Template.customers.helpers({
    customers : function(){
        var options = {
            sort : {
                createAt : -1
            }
        }

        return Customers.find({},options);
    }

});