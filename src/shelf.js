function shelfBook(book, shelf) {

  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}
//////////////////////////////////////////////////////////
function unshelfBook(name, shelf) {

  for (i = 0; i < shelf.length; i++) {
    if (name === shelf[i].title) {
      shelf.splice(i,1)
    }
  }
}
//////////////////////////////////////////////////////////
function listTitles(fantasyShelf) {

  for (i = 0; i < fantasyShelf.length; i++) {

    var titleList = fantasyShelf[i].title;
  }
  return (titleList);
}
/////////////////////////////////////////////////////////
function searchShelf(name, shelf) {

  for (i = 0; i < shelf.length; i++) {
    if (name === shelf[i].title) {

    } else {

    }
  }
}

/////////////////////////////////////////////////////////
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
