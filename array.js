//1. Create Array
// let car1 = "BMW";
// console.log(car1);
// let car2 = "Ford";
// console.log(car2);

// let car = [];  //Declaration
// car = ["BMW", "FORD", "Shwift", "Volvo", "Thar", "Fortuner","Hyundai"]; //Initialization
// console.log(car[0]); //Accesing array elements
// console.log(car[1]);
// console.log(car[2]);
// console.log(car[3]);
// console.log(car[4]);
// console.log(car[5]);

// for(let i = 0; i < car.length+1; i++){
//    console.log(car[i]); //Accesing array elements
// }

// let car = ["Fortuner", 5000000, "MP09123", "White", true, null];
// console.log(car);

// const cars = [];
// cars[0] = "BMW";
// cars[1] = "Volvo";
// cars[2] = "Fortuner";

// console.log(cars);

//2 : Type
// const car = new Array("BMW", "Fortuner", "Thar");
// console.log(car[2]);


//Array methods.....................
let fruits = ["Banana", "Apple", "Grapes"];
let vegiTables = ["Tomato", "Onion", "Potato"];
// console.log(fruits.length);
// console.log(fruits.toString()); //Convert the array into string comma seperated
// console.log(fruits.at(2));  //Find the index value
// console.log(fruits.join(":")); //Own seperators
// console.log(fruits.pop()); //Remove last element from array
// console.log(fruits);
// console.log(fruits.push("mango", "FruitsNamre"));
// console.log(fruits);
// console.log(fruits.unshift("1st fruits"));
// console.log(fruits.shift());
// console.log(fruits);
// console.log(delete fruits[1]);
// console.log(fruits);
// let myFreeze = fruits.concat(vegiTables);
// console.log(myFreeze.push("ghjdhf"));
// console.log(myFreeze);
// console.log(fruits.copyWithin(2,0,0));
// console.log(fruits);

//Multidimensional
//  let multi_d = [ [1,2,3], [4,5,6], [7,8,9] ];
//  console.log(multi_d);
// let one_d = multi_d.flat();
// console.log(one_d);

// let newArray = one_d.flatMap( a => console.log(a  * 2));

const fruitsNew = ["Banana", "Orange", "Apple", "Mango", "Pinapple", "Cherry"];
fruitsNew.splice(1, 5, "Lemon", "Kiwi");
console.log(fruitsNew);