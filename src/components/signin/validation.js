// at least one uppercase, lowercase, number, special character, and at least 8 characters
const passwordValidation = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}/;

const emailValidation = /^\w+$/;

/**
 * functions
 */
function validate(field, value) {
  if (field == "password") {
    return {
      success: passwordValidation.test(value),
      error:
        "Password must contain at least one uppercase, one lowercase, a number, a special character and at least 8 characters"
    };
  } else if (field == "email") {
    console.log(value, emailValidation.test(value));
    return {
      success: emailValidation.test(value),
      error: "Please enter a valid email address"
    };
  }
}

export default validate;
