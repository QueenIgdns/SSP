function assessPassword(password) {
  let score = 0;
  let feedback = [];

  if (password.length >= 12) score++; else feedback.push("Min 12 characters");
  if (/[A-Z]/.test(password)) score++; else feedback.push("Add uppercase");
  if (/[a-z]/.test(password)) score++; else feedback.push("Add lowercase");
  if (/[0-9]/.test(password)) score++; else feedback.push("Add digit");
  if (/[^A-Za-z0-9]/.test(password)) score++; else feedback.push("Add special char");

  let rating = "Weak";
  if (score >= 5) rating = "Strong";
  else if (score >= 4) rating = "Moderate";

  return `Rating: ${rating}\n\nIssues:\n- ${feedback.join("\n- ")}`;
}

function runAssessor() {
  const pw = document.getElementById("assessPw").value;
  document.getElementById("assessOutput").innerText = assessPassword(pw);
}
