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
  reviewsArray.push(addReviews);
  if (reviewsArray.includes(addReviews)) {
    console.log(reviewsArray);
    return reviewsArray;
  } else {
    console.log(addReviews);
    return addReviews;
  }
  console.log(reviewsArray);
  return reviewsArray;
}

///////////////////////////////////////////////////
function calculatePageCount(bookTitle, bookPageCount) {
  for (var i = 0; i < bookTitle.length; i++) {
    return
  }
}

////////////////////////////////////////////////////
function writeBook(bookTitle, bookCharacter, genre) {
  var myBook = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: 340,

    genre: "fantasy",
  };
  console.log(myBook);
  return myBook;

}

////////////////////////////////////////////////////
function editBook() {

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
