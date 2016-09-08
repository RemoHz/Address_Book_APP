app.controller('ContactsController', [
    '$scope', '$location', 'contactsService',
    function ($scope, $location, contactsService) {
        $scope.contacts = contactsService.getContacts();

        $scope.editContact = function (id) {
            $location.path('/edit-contact/' + id);
        };

        $scope.showDetails = function (id) {
            var contactDom = angular.element(document.getElementById('ct-details-' + id));
            contactDom.toggleClass('details-hidden');
        }
    }
]);

app.controller('AddContactController', [
    '$scope', '$location', 'contactsService',
    function ($scope, $location, contactsService) {
        $scope.addContact = function () {
            contactsService.addContact($scope.contact);
            $scope.contact = contactsService.resetContact();
            $location.path('/contacts');
        };
    }
]);

app.controller('EditContactController', [
    '$scope', '$routeParams', '$location', 'contactsService',
    function ($scope, $routeParams, $location, contactsService){
        var contactId = $routeParams.contactId ? parseInt($routeParams.contactId, 10) : 0;
        $scope.contact = contactsService.getContact(contactId, true);

        console.log(contactId);

        $scope.editContact = function () {
            contactsService.editContact($scope.contact);
            $scope.contact = contactsService.resetContact();
            $location.path('/contacts');
        };
    }
]);
