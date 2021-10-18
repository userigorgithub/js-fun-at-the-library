function createTitle(bookIdea) {
  //var bookIdea = "Storm's Awakening";
  //bookIdea = "The Storm's Awakening";
  //var sushiTitle = "Dancing Sushi";
  //sushiTitle = "The Dancing Sushi";
  //var dragonTitle = "Dragon in the Summer";
  //dragonTitle = "The Dragon in the Summer";
  //var ghostTitle = "Teenage Ghoul";
  //ghostTitle = "The Teenage Ghoul";
  console.log(`The ${bookIdea}`);
  return `The ${bookIdea}`;
  //or return "The " + bookIdea;
}
//////////////////////////////////////////////////
function buildMainCharacter(name, age, pronouns) {
  var myCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  console.log(myCharacter);
  return myCharacter;
}
///////////////////////////////////////////////////
function saveReview(addReviews, reviewsArray) {

  if (reviewsArray.includes(addReviews)) {
    return reviewsArray;
  } else {
    reviewsArray.push(addReviews);
    return addReviews;
  }
}

///////////////////////////////////////////////////
function calculatePageCount(bookTitle) {

  return bookTitle.length *20;

}
////////////////////////////////////////////////////
function writeBook(bookTitle, bookCharacter, genre) {
  var myBook = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: bookTitle.length *20,
    genre: "fantasy",
  };
  return myBook;

}

////////////////////////////////////////////////////
function editBook(bookTitle) {
  var numberOfPages = bookTitle.pageCount;
  console.log(numberOfPages * 0.75);
  return numberOfPages * 0.75;
}

///////////////////////////////////////////////////
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
