function createLibrary(name) {
  var library = {
    name: name,
    shelves: shelf = {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return library;
}

function addBook(library, bookName) {
  if (bookName.genre === 'fantasy') {
  library.shelves.fantasy.push(bookName);
  }
  if (bookName.genre === 'fiction') {
  library.shelves.fiction.push(bookName);
  }
  if (bookName.genre === 'nonFiction') {
  library.shelves.nonFiction.push(bookName);
  }
  return library;
}

function checkoutBook(library, bookName, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === bookName) {
      library.shelves[genre].splice(i,1);
      return `You have now checked out ${bookName} from the ${library.name}`;
    }
  }
  return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}`;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
