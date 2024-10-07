
let add = document.getElementById('addBtn');
let sub = document.getElementById('subBtn');
let mult = document.getElementById('mulBtn');
let div = document.getElementById('divBtn');
let result = document.getElementById('result');

add.addEventListener('click', function(){
      // Get the values of num1 and num2 inside the event listener
      let num1 = parseFloat(document.getElementById('num1').value);
      let num2 = parseFloat(document.getElementById('num2').value);
      
      // Perform the addition and display the result
        // Perform the addition and display the result
    result.innerHTML = "Addition is : " + (num1 + num2);
})
sub.addEventListener('click', function(){
    // Get the values of num1 and num2 inside the event listener
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    result.innerHTML = "Substraction is : " + (num1 - num2);
});
mult.addEventListener('click', function(){
     // Get the values of num1 and num2 inside the event listener
     let num1 = parseFloat(document.getElementById('num1').value);
     let num2 = parseFloat(document.getElementById('num2').value);
     result.innerHTML = "Multiplication is : " +(num1 * num2);
});
div.addEventListener('click', function(){
      // Get the values of num1 and num2 inside the event listener
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    result.innerHTML = "Division is :" +( num1 / num2);
});