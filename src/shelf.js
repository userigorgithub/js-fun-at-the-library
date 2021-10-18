
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

  //console.log(fantasyShelf[0].title);
  //return fantasyShelf[0, 1, 2].title;

}
/////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};
