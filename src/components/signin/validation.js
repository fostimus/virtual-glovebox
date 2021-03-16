// at least one uppercase, lowercase, number, special character, and at least 8 characters
const passwordValidation = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}/;

const emailValidation = /^\w+@\w+\.\w+$/;

/**
 * functions
 */
function validate(field, value) {
  let retVal;
  if (field == "password") {
    retVal = {
      success: passwordValidation.test(value),
      error:
        "Password must contain at least one uppercase, one lowercase, a number, a special character and at least 8 characters"
    };
  } else if (field == "email") {
    retVal = {
      success: emailValidation.test(value),
      error: "Please enter a valid email address"
    };
  }

  console.debug(field, "validation:", retVal);
  return retVal;
}

export default validate;
