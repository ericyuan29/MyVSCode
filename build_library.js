/*
Congratulations, you've passed the grueling rigmarole of librarian school and have become head librarian at your local Books-'N-Stuff.

Just as you sit down, eager to utilize all those skills you learned in "Lib 203 - Shushing: How to Maintain Order While Spitting", you realize you're still using index cards to handle everything.

But no matter, you know some JavaScript, so let's get to work modernizing your new digs.

Books-'N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
Movie
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
*/
// let ratings = [];

class Media {
  constructor(title) {
    // only property has no a default value?
    this._title = title;
    this._isCheckedOut = false;
    this._rating = [];
  }
  get mediaInfo() {
    return this._mediaInfo;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  set isCheckedOut(isCheckedOutIndex) {
    this._isCheckedOut = isCheckedOutIndex;
  }
  get rating() {
    return this._rating;
  }
  toggleCheckOutStatus() {
    // Here can we use isCheckedOutIndex from its setter?
    this._isCheckedOut = !this._isCheckedOut;
  }
  // Under .toggleCheckOutStatus(), create a method named getAverageRating. Return the average value of the ratings array.
  // Use the reduce method to find the sum of the ratings array. Divide this sum by the length of the ratings array, and return the result.
  getAverageRating() {
    // let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0)/this._ratings.length;
    // return ratingsSum;
    let ratingsIndex = (accumulator, currentValue) => accumulator + currentValue;
    // why not add one on length 0 + 1
    let ratingLength = this.rating.length;
    return this.rating.reduce(ratingsIndex) / ratingLength;
  }
  addRating(ratingKey) {
    this.rating.push(ratingKey);
  }
};
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
};
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}
// Create a Book instance with the following properties
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
// Call .toggleCheckOutStatus() on the historyOfEverything instance.
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
// Call .addRating() three times on historyOfEverything with inputs of 4, 5, and 5
// do I have to add one by one cause I only give one parameter earlier?
historyOfEverything.addRating(1);
historyOfEverything.addRating(2);
historyOfEverything.addRating(3);
// Call .getAverageRating() on historyOfEverything. Log the result to the console.
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(5);
speed.addRating(5);
speed.addRating(5);
console.log(speed.getAverageRating());

const agood = new Movie('Dallas is good', 'really good', 300);
agood.addRating(3);
agood.addRating(3);
agood.addRating(3);
console.log(agood.getAverageRating()); 

//Nice work! If you've made it this far, you clearly have a strong understanding of class syntax and inheritance.
//If you would like to continue working on this project, we have listed some avenues to build on your existing progress.
//Add more properties to each class (movieCast, songTitles, etc.)
//Create a CD class that extends Media.
//In .addRating(), make sure input is between 1 and 5.
//Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
//Create class called Catalog that holds all of the Media items in our library.
//CD
//Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
//Getters: all properties have a getter
//Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
//If you're looking for a challenge, try to create the four classes without using the steps below.

class CD extends Media {
  constructor(title, artist) {
    super(title);
    this._songs = [];
  }
  get songs() {
    return this._songs;
  }
  getAverageSongsRating() {
    let songsRatingIndex = (accumulator, currentValue) => accumulator + currentValue;
    let songsRatingLength = this.songs.length;
    return this.songs.reduce(songsRatingIndex) / songsRatingLength;
  }
};