function showTab(id) {
  document.querySelectorAll(".tool").forEach(t => t.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function runValidator() {
  alert("Validator button clicked");

function runValidator() {
  const data = {
    fullName: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    username: document.getElementById("username").value,
    message: document.getElementById("message").value
  };

  // Clear old errors
  ["fullName", "email", "username", "message"].forEach(id => {
    document.getElementById(id + "Error").innerText = "";
  });

  const errors = validateInput(data);

  if (Object.keys(errors).length > 0) {
    for (let key in errors) {
      document.getElementById(key + "Error").innerText = errors[key];
    }
    return;
  }

  const clean = sanitizeInput(data);
  document.getElementById("valOutput").innerText =
    "Validation Successful\n\n" +
    JSON.stringify(clean, null, 2);
}
