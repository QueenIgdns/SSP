function sanitizeInput(formData) {
  let sanitized = {};
  let notes = {};

  sanitized.fullName = formData.fullName.replace(/[^A-Za-z\s\-']/g, "");
  sanitized.email = formData.email.replace(/\s+/g, "");
  sanitized.username = formData.username.replace(/[^A-Za-z0-9_]/g, "");

  let message = formData.message
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|OR|CREATE|ALTER)\b/gi, "[REMOVED]");

  if (message !== formData.message) {
    notes.message = "Unsafe content sanitized.";
  }

  sanitized.message = message;

  return { sanitized, notes };
}
