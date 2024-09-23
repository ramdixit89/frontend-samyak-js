//Strings

// let name = "Hello"; //Double quotes
// let name2 = 'Hello uncle'; //Single qoutes
// let name3 = `Hello backticks`; //Template string
// for(let i = 0; i < name3.length; i++ ){
//   console.log(name3[i]);
// } 

//Methods of String
let str = "Hello from RDCoders";
//console.log(str.charAt(1)); //Returns the character at the specified index.
// console.log(str.charCodeAt(2));
//console.log(str.at(400));
//console.log(str.charAt(100)); //If no character is found, [ ] returns undefined, while charAt() returns an empty string.
 let str2 = "slice() extracts a part of a string and returns the extracted part in a new string.";
// console.log(str2.slice(0,60));  //0 - 59 returns the first 60 characters
//console.log(str2.substring(7, -2)); //Returns the characters in a string between "start" and "end".
//console.log(str2.substr(7, 2)); //Returns the characters in a string from "start", and through the specified number of characters.
// let middleName = "CODER";
// let name = "RAM";
// let lastname = "DIXIT";
// //console.log(str2.substr(12, 5));
// // console.log(str2.toUpperCase());
// // console.log(name.toLowerCase());
// console.log(middleName.concat( " ",name, " ", lastname)); //Merge two strings

let newStr = "Please visit Microsoft! and Microsoft! and Microsoft!";
// console.log(newStr.length);
// let str3 = newStr.trim();
// console.log(str3.length);

// console.log(newStr.length);
// let startTrim = newStr.trimStart();
// let endTrim = newStr.trimEnd();
// console.log(startTrim.length);
// console.log(endTrim.length);

// console.log(newStr.repeat(3));
// console.log(newStr.replaceAll("Microsoft", "Indore"));
// console.log(newStr);
console.log(newStr.split("visit"));

