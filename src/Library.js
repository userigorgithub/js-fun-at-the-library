function createLibrary(libraryName, libraryShelves) {

  var myLibrary = {
    name: libraryName,
    shelves: libraryShelves,

  }

  console.log(myLibrary);
  return myLibrary;

}

/////////////////////////////////////////////////////
module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook
};
