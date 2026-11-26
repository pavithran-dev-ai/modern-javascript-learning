//assign array
let snacks = new Array("Lays", "KurKure", "Doritos");//constructor function
console.log(snacks);
//literal array
let beverages = ["Coke", "Pepsi", "Sprite"];
console.log(beverages);
//access array elements
console.log(snacks[0]); // Lays
console.log(beverages[1]); // Pepsi
console.log(snacks[2]); // Doritos
console.log(beverages.length); // 3
let fooditems = [
    {item:1, name:"chicken biryani", dietary:"non-veg", price:250},
    {item:2, name:"veg biryani", dietary:"veg", price:200},
    {item:3, name:"chicken fried rice", dietary:"non-veg", price:150},
    {item:4, name:"veg fried rice", dietary:"veg", price:120},
]
console.log(fooditems);
//access particular object in array
console.log(fooditems[0]); // {item:1, name:"chicken biryani", dietary:"non-veg", price:250}
console.log(fooditems[1]); // {item:2, name:"veg biryani", dietary:"veg", price:200}
console.log(fooditems[2].name); // chicken fried rice
console.log(fooditems[3].name); // veg fried rice
//iterate through array of objects
for(let i=0; i<fooditems.length; i++){
    console.log(`Item: ${fooditems[i].item}, Name: ${fooditems[i].name}, Dietary: ${fooditems[i].dietary}, Price: ${fooditems[i].price}`);
}
console.log("Menu Items:",fooditems.length);
//for in loop
for(let index in fooditems){
    console.log(`Item: ${fooditems[index].item}, Name: ${fooditems[index].name}`); 
}
//for of loop
for(let item of fooditems){
    console.log(`Item: ${item.item}, Name: ${item.name}`);
}
//array destructuring
let [chickenBiryani, vegBiryani, chickenFriedRice, vegFriedRice] = fooditems;
console.log(chickenBiryani);
console.log(vegBiryani);
console.log(chickenFriedRice);
console.log(vegFriedRice);
//multi dimensional array
let multiDimensionalArray = [
    [1, 2, 3],
    [4, [5, 5, 5], 6],
    [7, 8, 9]
];
console.log(multiDimensionalArray);
console.log(multiDimensionalArray[0][0]); // 1
console.log(multiDimensionalArray.flat()); // [1, 2, 3, 4, [5, 5, 5], 6, 7, 8, 9]
console.log(multiDimensionalArray.flat(2)); // [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9]
