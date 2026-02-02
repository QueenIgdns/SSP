// ================= PASSWORD ASSESSOR =================
function checkPasswordStrength() {
  const pw = document.getElementById("assessPassword").value;
  const result = document.getElementById("strengthResult");

  if (!pw) {
    result.innerText = "Enter a password.";
    return;
  }

  let score = 0;
  if (pw.length >= 12) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[a-z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;

  result.innerText =
    score <= 2 ? "Weak" :
    score <= 4 ? "Moderate" :
    "Strong";
}

// ================= PASSWORD GENERATOR =================
async function generatePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  let pw = "";

  for (let i = 0; i < 12; i++) {
    pw += chars[Math.floor(Math.random() * chars.length)];
  }

  document.getElementById("genPassword").innerText = "Password: " + pw;
  document.getElementById("genHash").innerText =
    "SHA-256: " + await sha256(pw);
}

// ================= SHA-256 =================
async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

// ================= WEB FORM =================
function handleSubmit(e) {
  e.preventDefault();

  const data = {
    fullName: fullName.value,
    email: email.value,
    username: username.value,
    message: message.value
  };

  // Basic validation
  if (!data.fullName || !data.email || !data.username || !data.message) {
    alert("All fields required.");
    return;
  }

  // Sanitization
  const sanitized = {
    fullName: data.fullName.replace(/[^A-Za-z\s]/g, ""),
    email: data.email.replace(/\s/g, ""),
    username: data.username.replace(/[^A-Za-z0-9_]/g, ""),
    message: data.message
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\b(SELECT|INSERT|DELETE|DROP|OR)\b/gi, "[REMOVED]")
  };

  output.innerText = JSON.stringify(sanitized, null, 2);
}
