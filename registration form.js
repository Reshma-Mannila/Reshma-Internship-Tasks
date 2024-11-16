// script.js
document.getElementById("registrationForm").addEventListener("submit", function (event) {
  // Prevent form submission
  event.preventDefault();

  // Validate name
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    alert("Name is required!");
    return;
  }

  // Validate email
  const email = document.getElementById("email").value.trim();
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Enter a valid email address!");
    return;
  }

  // Validate password
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    alert("Password must be at least 6 characters long!");
    return;
  }

  // Validate gender
  const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    alert("Please select a gender!");
    return;
  }

  // All validations passed
  alert("Registration successful!");
});