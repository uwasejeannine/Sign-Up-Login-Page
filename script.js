// Get references to the login and signup forms
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  alert(`Login Successful!\nEmail: ${email}`);
});

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const signupEmail = document.getElementById("signupEmail").value;
  const signupPassword = document.getElementById("signupPassword").value;

  alert(
    `Registration Successful!\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${signupEmail}`
  );
});
