function validateInput(data) {
  let errors = {};

  if (!data.fullName || data.fullName.length < 2)
    errors.fullName = "Invalid full name";

  if (!/^[^ ]+@[^ ]+\.[a-z]{2,}$/i.test(data.email))
    errors.email = "Invalid email";

  if (!/^[A-Za-z0-9_]{4,16}$/.test(data.username))
    errors.username = "Invalid username";

  if (!data.message || data.message.length > 250)
    errors.message = "Invalid message";

  return errors;
}
