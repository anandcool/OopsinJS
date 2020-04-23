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

//Magazine Consturtor
function Magazine(title,author,year,month){
Book.call(this,title,author,year);
this.month = month;
}

//Instantiate Magazine Object
const mag1 = new Magazine('Magazine One','John Doe','2019','Dec');

Magazine.prototype = Object.create(Book.prototype);

// //Use Magazine Constructor
Magazine.prototype.constructor = Magazine;
const mag2 = new Magazine('Magazine One','John Doe','2019','Dec');
console.log(mag2.getSummary());
console.log(mag2);
// console.log(mag1.getSummary());
// console.log(mag1.title)