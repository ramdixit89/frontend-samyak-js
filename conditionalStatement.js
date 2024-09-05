//1 : if(){ 
//}else { }

// let hour =  18;
// if(hour  < 18){
//     //block of code
//     let greeting = "Good day"; //statement
//     console.log(greeting); //statement
// }else{
//     let greeting =  "Good night";
//     console.log(greeting);
// }

// let num = 10;
// if(num % 2 == 0){
//    console.log("Number is even number");
// }else{
//     console.log("Number is not divisible by 2");
// }


// let num2 = 13;
// if(num2 % 2 != 0){
//    console.log("Not divisible by 2");
// }else{
//    console.log("divisible by 2");
// }

//2 : else if

// let time = 10;            
// if(time < 20){
//     console.log("Good morning");      
// }else if(time > 40){
//     console.log("Midnight");
// } 
// else if(time > 20){
//   console.log("Good day");
// } 
// else{
//     console.log("Good evening");  //False
// }



let num1 = parseInt(prompt("Enter number 1"));
let num2 = parseInt(prompt("Enter number 2"));
let operator = parseInt(prompt("Enter operator"));
// let num1 = 10;
// let num2 = 20;
let result;
// let operator = "*";
if(operator == "+"){
    result = num1 + num2;
    console.log("Addition is :",result);
}else if(operator == "-"){
    result = num1 - num2;
    console.log("Substraction is : ",result);
}else if(operator == "/"){
    result = num1/num2;
    console.log("Division is : ", result);
}else if(operator == "*"){
    result = num1 * num2;
    console.log("Multiplication is : ", result);
}
