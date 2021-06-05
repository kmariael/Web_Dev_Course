let mobileContacts = [{name: 'Marialena Kasapaki', phone: '6945'}];

function insertContact (contactName, phoneNumber) {
    let contact = {name: contactName, phone: phoneNumber};
    mobileContacts.push(contact);
    alert('Contact inserted');
}

function deleteContact(phoneNumber) {
    let deleted = false;
    let output;
    for (let i = mobileContacts.length -1; i >= 0; i--) {
        if (mobileContacts[i]['phone'] == phoneNumber) {
            mobileContacts.splice(i, 1);
            deleted = true;
        }
    }

    output = (deleted) ? 'Contact deleted successfully' : 'Contact not Found';

    alert(output);
}

function printContacts(contacts) {
    for (let contact of contacts) {
        for (let property in contact) {
            document.write(contact[property] + ' ')
        }
        document.write('<br>');
    }
}

insertContact('Maria Delta', '6942');
insertContact('George Papadopoulos', '6943');
printContacts(mobileContacts);
document.write('<br>');
deleteContact('6943');
printContacts(mobileContacts);
