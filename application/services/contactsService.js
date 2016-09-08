app.service('contactsService', function () {
    this.getContacts = function () {
        return contacts;
    };

    this.resetContact = function () {
        return {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            country: ''
        };
    }

    this.addContact = function (contact) {
        var nextId = contacts.length + 1;
        contact.id = nextId;

        contacts.push(contact);
    };

    this.editContact = function (contact) {
        contacts[contact.id] = contact;
        console.log(contact.id);
    };

    this.getContact = function (id, Obj) {
        for (var index = 0; index < contacts.length; index++){
            if (contacts[index].id === id){
                return Obj ? contacts[index]:index;
                break;
            }
        }
    };

    // Initial Data
    var contacts = [
        {
            id : 0,
            firstName: 'Wilson',
            lastName: 'Smith',
            email: 'wilson@gmail.com',
            phone: '123456789',
            address: '7 Maroona Road',
            city: 'Melbourne',
            country: 'Australia'
        },
        {
            id : 1,
            firstName: 'Harry',
            lastName: 'Peter',
            email: 'harry@gmail.com',
            phone: '123456780',
            address: '7 Maroona Road',
            city: 'Sydney',
            country: 'Australia'
        }
    ];
});
