let num = 10;
let name = "Ram";
//Unlike primitive data types (Number, String, Boolean, null, undefined, and symbol), which hold a single value, objects can hold multiple values as properties.
// let objec_name = {  //Object Declaration
//    num : 10,
//    name : "Ram",
//    is_married : "False",
//    add : function(){
//      console.log("hello");
//    },
//    array : [1,2,3,4,5]
// };


//1 ; Object Declaration
// let car = {
//     name : "BMW",
//     model : "X5",
//     color : "Black",
//     price : 10000000,
//     is_available : true,  
//     start : () =>{
//         return "car started...";
//     },
//     stop : (function(){
//        return "Car stopped...";
//     }) 
// };
// //2 : Accesing objects
// console.log(car.name); // Accessing object properties
// console.log(car.model);
// console.log(car.color);
// console.log(car.price);
// console.log(car.is_available);
// console.log(car.start());
// console.log(car.stop());

// let car = {};
// car.name = "BMW";
// car.price = 10000000;
// console.log(car.name);

//Array in Object

// const car = {
//     cars : ["BMW", "Audi", "Mercedes", "Tesla"],
// }
// console.log(car.cars);

//IceCream
// let iceCream = {
//     name : "Vanila",
//     price : 100,
//     color : "White",
//     is_available : true,
//     is_available : false,
//     melt : function(){
//         return "Melting..........";
//     }
// };
// console.log(iceCream.melt());

//Using new keyword
// const person = new Object({
//     name : "John",
//     age : 30,
//     is_married : true,
// });  //Object Declaration
// person.name = "John"
// person.age = 30
// person.is_married = true
// console.log(person);

//Using constructor
// let person = {
//     name : "Ram",
//     age : 20,
//     is_married : false,
//     is_available : true,
// }
// let person2 = {
//     name : "Shiva",
//     age : 25,
//     is_married : false,
//     is_available : true,
// }

// function Person(name, age, is_married, is_available){
//     this.name = name;
//     this.age = age;
//     this.is_married = is_married;
//     this.is_available = is_available;
// }
// const obj1 = new Person("Ram", "23", "False", "True");  //Constructor calling
// console.log(obj1);
// const obj2 = new Person("Stayam", "26", "False", "True");  //Constructor calling
// console.log(obj2);

//E-commerce  example
// const product1 = {
//     name : "bag",
//     price : 1000,
//     color : ["Black", "Red", "Blue"],
//     is_available : true,
//     offer : "50-80% Off"
// }
// //For in loop in Objects
// for(a in product1){
//     console.log(  a," : ",product1[a]);
// }
// const product2 = {
//     name : "Mobile",
//     price : 20000,
//     color : ["Black", "Red", "Blue"],
//     is_available : true,
//     offer : "50-80% Off"
// }
// const product3 = {
//     name : "Laptop",
//     price : 50000,
//     color : ["Black", "Red", "Blue"],
//     is_available : true,
// }


//Array of Objects
// const products = [
// {
//     name : "bag",
//     price : 1000,
//     color : ["Black", "Red", "Blue"],
//     is_available : true,
//     offer : "50-80% Off"
// },
// {
//     name : "Mobile",
//     price : 20000,
//     color : ["Black", "Red", "Blue"],
//     is_available : true,
//     offer : "50-80% Off"
// },
// {
//     name : "Computer",
//     price : 20000,
//     color : ["Black", "Red", "Blue"],
//     is_available : true,
//     offer : "50-80% Off"
// },
// {
//     name : "Tablet",
//     price : 20000,
//     color : ["Black", "Red", "Blue"],
//     is_available : true,
//     offer : "50-80% Off"
// }
//  ];
//  console.log(products[0].color[2]);
//  for(a in products){
//     console.log(a, " : ",products[a].name);
// }
// for(let i = 0; i <= products.length; i++){
//     console.log(products[i]);
// }

// let items = products.map(item => item.name);
// console.log(items);



 //Conditional statement in Objects
//  let items = {
//     name : "abc",
//     price : 1000,
//     available : false,
//     is_available : () =>{
//         if(items.available == true){
//             return "Available";
//         }else{
//             return "Not Available";
//         }
//     }
// }
// console.log(items.is_available());