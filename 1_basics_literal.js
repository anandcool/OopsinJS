const s1 = "Hello";
console.log(s1.toUpperCase()); // javascript add a wrapper in it
console.log(typeof s1)
 
let str = new String("hello");
console.log(typeof str);

console.log(window.navigator);
console.log(navigator.appVersion);

//Creating Object Literals

const Book1={
    title:'My Life My Mistake',
    author:'steve',
    year:'2019',
    getSummary:function(){
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
}

console.log(Book1.getSummary);
console.log(Book1.title);
console.log(Object.values(Book1));
console.log(Object.keys(Book1));