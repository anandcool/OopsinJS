class Book{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
    getAge(){
        const year = new Date().getFullYear() - this.year;
        return `${this.title} is ${year} year old`;
    }

    //Revise Age
    revise(newYear){
    this.year = newYear;
    this.revised =true;
    }
    static topBookStore(){
        return 'Anand Stephan';
    }

}


// Instanitate Object
const book1 = new Book('Book1','John Doe','2019');
// console.log(book1);

book1.revise('2018');
console.log(book1);

// console.log(Book.topBookStore());