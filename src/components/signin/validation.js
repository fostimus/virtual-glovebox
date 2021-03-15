// at least one uppercase, lowercase, number, special character, and at least 8 characters
const passwordValidation = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}/;

const emailValidation = /^\w+@[a-z]+\.[a-z]+$/;

/**
 * functions
 */
function validatePassword(pw) {
  return {
    success: passwordValidation.test(pw),
    error:
      "Password must contain at least one uppercase, one lowercase, a number, a special character and at least 8 characters"
  };
}

function validateEmail(email) {
  return {
    success: emailValidation.test(email),
    error: "Please enter a valid email address"
  };
}

export { validatePassword, validateEmail };
