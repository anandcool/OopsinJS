const bookProtos = {
    getSummary:function(){
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    },
    getAge: function(){
    const year = new Date().getFullYear() - this.year;
    return `${this.title} is ${year} year old`;
    }
}

// Create Object
const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'John Doe';
book1.year = '2014';

console.log(book1);