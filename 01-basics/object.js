const person = {
    fname:'pavithran',
    lname:'senthilkumar',
    age:21,
    drm:'businessman',
    parent:{
        father:"appa",
        mother:"amma"
    },
    fullname(){
        return `${this.fname} ${this.lname}`
    },
    };
//object merging
const personmethod = {
 yearofbirth(){
    return new Date().getFullYear() - this.age
   },
   //using get u can call as property not an function
   favnumber: [1,2,3,4,5],
   get favnumbercount() {
    return this.favnumber.length
   }
}
//Object.assign(person,personmethod);
//console.log(person.yearofbirth());
//console.log(person)
//object cloning
const objectcopied = Object.assign({},person);
//objedct merging using spread operator
const finalobj = {...person, ...personmethod};
//delete
delete person.age
function getfullname(fname,lname){
    return{
        fname,
        lname
    }
}
console.log(getfullname("anbu", "selvan"));
console.log(personmethod, personmethod.favnumbercount);