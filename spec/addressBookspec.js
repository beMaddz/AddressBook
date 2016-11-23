var assert = require('assert');
var AddressBook = require('../src/addressBook.js');
var Contact = require('../src/contact.js');

describe('Address book', function() {
  it('should be able to add address', function() {
    var addressBook = new AddressBook();
    var thisContact = new Contact();
    addressBook.addAddress(thisContact);
    assert.equal(addressBook.getAddress(0), thisContact);
  });
});
