// Event listener to toggle password visibility
document.getElementById("togglePassword").addEventListener("click", function() {
  var passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text";  // Show password
  } else {
    passwordField.type = "password";  // Hide password
  }
});

// Form validation and submission handling
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent the form from submitting immediately

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Basic validation
  if (name === "" || email === "" || password === "") {
    alert("Please fill out all fields.");
    return;
  }

  // Display success message if validation passes
  document.getElementById("successMessage").style.display = "block";

  // Optionally, reset the form after submission
  document.getElementById("signupForm").reset();
});
