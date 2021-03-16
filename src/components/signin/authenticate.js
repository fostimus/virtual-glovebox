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

      if (error.code === "auth/invalid-email") {
        userFriendlyError = "Not a valid email.";
      }

      if (error.code === "auth/weak-password") {
        userFriendlyError = "Password too short.";
      }
      console.warn(error.code, error.message);

      failCallback(userFriendlyError);
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
      if (error.code === "auth/wrong-password") {
        userFriendlyError = "Wrong password. Try again.";
      }

      if (error.code === "auth/internal-error") {
        userFriendlyError = "Internal error.";
      }

      if (error.code === "auth/weak-password") {
        userFriendlyError = "Password too short.";
      }

      if (error.code === "auth/invalid-email") {
        userFriendlyError = "Not a valid email.";
      }

      if (error.code === "auth/too-many-requests") {
        userFriendlyError = error.message;
      }

      console.warn(error.code, error.message);

      failCallback(userFriendlyError);
    });
};

export { userExists, signUp, logIn };
