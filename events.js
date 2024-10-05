// //1 : Click event
// let head = document.getElementById('head1');
// let para = document.getElementById('para');
// function changeContent(){
//     head.innerHTML = "Changed after click";
//     head.style.color = "blue";
//     para.style.backgroundColor = "yellow";
//     console.log("Key pressed...")
// }


//Form validation
function validate(e) {
    e.preventDefault(); // Prevent form submission

    // Get values from input fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const error = document.getElementById('error');

    // Clear previous error messages
    error.innerHTML = "";

    // Validation checks
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        error.innerHTML = "All fields are required.";
        return false; // Stop form submission
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    if (!emailPattern.test(email)) {
        error.innerHTML = "Please enter a valid email.";
        return false; // Stop form submission
    }

    if (password.length < 6) {
        error.innerHTML = "Password must be at least 6 characters long.";
        return false; // Stop form submission
    }

    if (password !== confirmPassword) {
        error.innerHTML = "Passwords do not match.";
        return false; // Stop form submission
    }

    // If all validations pass
    error.innerHTML = "Form submitted successfully!";
    error.style.color = "green";
    // Here you can submit the form or handle it as needed
    // document.getElementById('registrationForm').submit();
}
