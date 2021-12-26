function createTitle(bookIdea) {
  return `The ${bookIdea}`;
}

function buildMainCharacter(name, age, pronouns) {
  var myCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return myCharacter;
}

function saveReview(addReviews, reviewsArray) {
  if (reviewsArray.includes(addReviews)) {
    return reviewsArray;
  } else {
    reviewsArray.push(addReviews);
    return addReviews;
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(bookTitle, bookCharacter, genre) {
  var myBook = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: bookTitle.length * 20,
    genre: genre,
  };
  return myBook;
}

function editBook(myBook) {
  return myBook.pageCount = myBook.pageCount *= 0.75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
