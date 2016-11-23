function AddressBook() {
  this.addressList = [];
}
AddressBook.prototype.addAddress = function(contact) {
  this.addressList.push(contact);
}
AddressBook.prototype.getAddress = function(index) {
  return this.addressList[index];
}

module.exports = AddressBook;
