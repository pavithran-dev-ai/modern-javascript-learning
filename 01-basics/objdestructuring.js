person = {
    fname:"pavithran",
    lname:"senthilkumar",
    age:21,
    area:"Dharapuram",
    favourite(){
         return `${this.fname} ${this.lname}`
    }
} 
console.log(person.favourite);
let {fname,lname} = person;
console.log(fname,lname);
let {fname:firstname, lname:lastname} = person;
console.log(firstname, lastname); 
const {favno1, favno2, ...rest} ={
    favno1: 7,
    favno2: 9,
    favno3: 11,
    favno4: 13,
    favno5: 15,
}
console.log(favno1, favno2, rest);