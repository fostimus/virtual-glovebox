import { firebase } from "../../../pages/_app.js";

const userExists = async email => {
  const result = await firebase.auth().fetchSignInMethodsForEmail(email);

  return result.length >= 1;
};

const signUp = (email, password, successCallback, failCallback) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      successCallback();
    })
    .catch(error => {
      let userFriendlyError;

      if (errorCode === "auth/invalid-email") {
        userFriendlyError = "Not a valid email.";
      }

      if (errorCode === "auth/weak-password") {
        userFriendlyError = "Password too short.";
      }
      console.log(error.code, error.message);

      // TODO: use failCallback here to do something with userFriendlyError
    });
};

const logIn = (email, password, successCallback, failCallback) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      successCallback();
    })
    .catch(error => {
      let userFriendlyError;
      if (errorCode === "auth/wrong-password") {
        userFriendlyError = "Invalid password.";
      }

      if (errorCode === "auth/internal-error") {
        userFriendlyError = "Internal error.";
      }

      if (errorCode === "auth/weak-password") {
        userFriendlyError = "Password too short.";
      }

      if (errorCode === "auth/invalid-email") {
        userFriendlyError = "Not a valid email.";
      }

      console.log(error.code, error.message);

      // TODO: use failCallback here to do something with userFriendlyError
    });
};

export { userExists, signUp, logIn };
