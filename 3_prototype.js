//Constructor
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
}
//getSummary
Book.prototype.getSummary =  function(){
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
};

//getAge
// Book.prototype.age = function(){
//     const year = new Date().getFullYear() - this.year;
//     return `${this.title} is ${year} year old`;
// }

//Revise Age
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised =true;
}

// Instatiate an Object
const book1 = new Book('Book One','John Doe','2019');
const book2 = new Book('Book Two','Jane Doe','2019');

// console.log(book1);
console.log(book2);

//Book Age
// book2.age();
// console.log(book2);
book2.revise('2020');
// console.log(book1);
console.log(book2);