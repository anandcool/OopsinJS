class Book{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }


}

//Magazine Subclasses
 
class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year,month);
        this.month = month;
    }
}

// Instantiate 
const mag1 = new Magazine('Mag One','Jane Doe','2019','Jan');
console.log(mag1.getSummary());