// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookList,bookName) {
  var bk = [...bookList];
  bk.push(bookName);
  return bk;
  // Change code above this line
}

// Change code below this line
function remove (bookList,bookName) {

  var bk = [...bookList];
  console.log(11,bk);
  var book_index = bk.indexOf(bookName);
  if (book_index >= 0) {

    bk.splice(book_index, 1);
    return bk;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
