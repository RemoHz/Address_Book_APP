var app = angular.module('addressBookApp', []);

// Route Config
app.config(function ($routeProvider) {
    $routeProvider
        .when('/contacts',
        {
            controller: 'ContactsController',
            templateUrl: './application/views/contacts.html'
        })
        .when('/add-contact',
        {
            controller: 'AddContactController',
            templateUrl: './application/views/addContact.html'
        })
        .when('/edit-contact/:contactId',
        {
            controller: 'EditContactController',
            templateUrl: './application/views/editContact.html'
        })
        .otherwise({
            redirectTo: '/contacts'
        });
});
