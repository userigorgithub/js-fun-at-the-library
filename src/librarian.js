class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
    this.isMorning = false;
  }
  greetPatron(patronName, isMorning) {
    this.isMorning = true;
    if (isMorning) {
      return `Good morning, ${patronName}!`
    }
    return `Hello, ${patronName}!`;
  }
  findBook(book) {
    for (var i = 0; i < this.library.shelves.fantasy.length; i++) {
      if (this.library.shelves.fantasy[i].title === book) {
        this.library.shelves.fantasy.splice(i, 1);
        return `Yes, we have ${book}`;
      }
    }
    for (var i = 0; i < this.library.shelves.nonFiction.length; i++) {
      if (this.library.shelves.nonFiction[i].title === book) {
        this.library.shelves.nonFiction.splice(i, 1);
        return `Yes, we have ${book}`;
      }
    }
    for (var i = 0; i < this.library.shelves.fiction.length; i++) {
      if (this.library.shelves.fiction[i].title === book) {
        this.library.shelves.fiction.splice(i, 1);
        return `Yes, we have ${book}`;
      }
    }
    return `Sorry, we do not have ${book}`;
  }
  calculateLateFee(fee) {
    return Math.ceil(fee * 0.25);
  }
}

module.exports = Librarian;
