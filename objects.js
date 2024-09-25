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

const car = {
    cars : ["BMW", "Audi", "Mercedes", "Tesla"],
}
console.log(car.cars);