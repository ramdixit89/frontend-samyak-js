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



// let num1 = parseInt(prompt("Enter number 1"));
// let num2 = parseInt(prompt("Enter number 2"));
// let operator = parseInt(prompt("Enter operator"));
// // let num1 = 10;
// // let num2 = 20;
// let result;
// // let operator = "*";
// if(operator == "+"){
//     result = num1 + num2;
//     console.log("Addition is :",result);
// }else if(operator == "-"){
//     result = num1 - num2;
//     console.log("Substraction is : ",result);
// }else if(operator == "/"){
//     result = num1/num2;
//     console.log("Division is : ", result);
// }else if(operator == "*"){
//     result = num1 * num2;
//     console.log("Multiplication is : ", result);
// }


// let studentName = "Ram";
// let studentRolllNo = 10;
// let stuPercentage = 86;

// if( stuPercentage < 33 ){
//     console.log("Fail");
// } else if( stuPercentage <= 60 && stuPercentage >= 33 ){
//     console.log("Student detail is : ")
//     console.table(studentRolllNo ,studentName, stuPercentage+".00%" );
//     console.log("C Grade");
// } else if( stuPercentage > 60  && stuPercentage <= 75){
//     console.log("Student detail is : ")
//     console.table(studentRolllNo ,studentName, stuPercentage+".00%" );
//     console.log("B Grade");
// } else if( stuPercentage > 75 && stuPercentage <= 85 ){
//     console.log("Student detail is : ")
//     console.table(studentRolllNo ,studentName, stuPercentage+".00%" );
//    console.log("A Grade");
// } else if( stuPercentage > 85 && stuPercentage <= 100 ){
//     console.log("Student detail is : ")
//     console.table(studentRolllNo ,studentName, stuPercentage+".00%" );
//     console.log("A+ Grade");
// } else {
//     console.log("Absent");
// }


// console.log(new Date().getDay()); //2 :

// let percentage = 60;
// //Conditional Statement
// switch(percentage){
//     // case, break, default

//     case 60 : console.log("A Grade");
//     break;

//     case 55 : console.log("C Grade");
//     break;

//     default : console.log("Absent :");
// }


//January to December
// let monthNumber = parseInt(prompt("Enter month :"));
// let monthNumber = 5;

// switch(monthNumber){
//      case 1 : "January";
//      break;
//      case 2 : "February";
//      break;
//      case 3 : "March";
//      break;
//      case 4 : "April";
//      break;
//      case 5 : console.log("May");
//      break;
//      case 6 : "June";
//      break;
//      case 7 : "July";
//      break;
//      case 8 : "August";
//      break;
//      case 9 : "September";
//      break;
//      case 10 : "October";
//      break;
//      case 11 : "November";
//      break;
//      case 12 : console.log("December");
//      break;
//      default : console.log("Invalid month number");
// }


//Calculator using Switch case:
let number1 = parseFloat(prompt("Enter number 1"));
let number2 = parseFloat(prompt("Enter number 2"));
let operator = prompt("Enter operator");

switch(operator){
    case "+" : console.log("Addition is : ", number1 + number2);
    break;

    case "-" : console.log("Substraction is : ", number1 - number2);
    break;

    case "*" : console.log("Multiplication is : ", number1 * number2);
    break;

    case "/" : console.log("Division is : ", number1 / number2);
    break;

    case "%" : console.log("Remainder is : ", number1 % number2);
    break;

    default : console.log("Invalid operator");
}

