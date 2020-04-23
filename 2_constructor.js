//Constructor
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary=function(){
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    };
}

// Instatiate an Object
const book1 = new Book('Book One','John Doe','2019');
const book2 = new Book('Book Two','Jane Doe','2019');

console.log(typeof book1);
console.log(book2.getSummary());