function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(name, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (name === shelf[i].title) {
      shelf.splice(i,1)
    }
  }
}

function listTitles(titles) {
  var titleList = [];
  for (var i = 0; i < titles.length; i++) {
    titleList.push(titles[i].title);
  }
  return titleList.join(', ');
}

function searchShelf(shelf, name) {
  var onShelf = false;
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === name) {
      onShelf = true;
    }
  }
  return onShelf;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
