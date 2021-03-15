// at least one uppercase, lowercase, number, special character, and at least 8 characters
const passwordValidation = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}/;

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

export { validatePassword };
