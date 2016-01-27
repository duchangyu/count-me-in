FlowRouter.route('/', {
    name: 'home',
    action: function () {

        BlazeLayout.render('homeLayout', {main: 'main'})
    }
});

FlowRouter.route('/customers', {
    name: 'listCustomer',
    action: function () {

        BlazeLayout.render('homeLayout', {main: 'customers'})
    }
});

FlowRouter.route('/customers/add', {
    name: 'newCustomer',
    action: function () {

        BlazeLayout.render('homeLayout', {main: 'newCustomer'})
    }
});