function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error-msg");

  if (user === "marielita" && pass === "marielita123") {
    window.location.href = "birthday.html";
  } else {
    error.style.display = "block";
  }
}
