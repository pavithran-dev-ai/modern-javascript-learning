var chocolate = "Dairy Milk";
var $chocolate = "Milkybar";
var _chocolate = "Fivestar";
var _chocolate$ = "KitKat";
console.log(chocolate);
console.log($chocolate);
console.log(_chocolate);
console.log(_chocolate$);
function chocolateget() {
    var chocolate1 = "Perk";
    console.log(chocolate1);
    console.log("This is a chocolate function");
    console.log(chocolate);
};
chocolateget();
//console.log(chocolate1); // This will throw an error because chocolate1 is not defined in this scope
for(var i = 0; i < 5; i++){
    console.log("Iteration number: " + i);
}
console.log("Final value of i: " + i); // This will print 5 because var is function-scoped
let person = 'vishal raveena'
console.log(person);
function personget() {
    let person1 = 'vishal';
    console.log(person1);
    console.log("This is a person function");
    console.log(person);
};
personget();
//console.log(person1); // This will throw an error because person1 is not defined in this scope
for (let j = 0; j < 5; j++){
    console.log("Iteration number: " + j);
}
//console.log("Final value of j: " + j); // This will throw an error because j is not defined in this scope
let snacks = "Lays";
snacks = "KurKure"; // Reassigning the value of snacks
console.log(snacks);
const chips = "Doritos";
//chips = "Cheetos"; // This will throw an error because chips is a constant and cannot be reassigned
console.log(chips);
const snacks1 = ["Lays", "KurKure"];
snacks1.push("Doritos"); // This is allowed because we are modifying the contents of the array, not reassigning the variable
console.log(snacks1);