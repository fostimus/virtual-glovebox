import { firebase } from "../../firebase";

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
      console.warn(error.code, error.message);

      if (error.code === "auth/invalid-email") {
        failCallback("email", "Not a valid email.");
      }

      if (error.code === "auth/weak-password") {
        failCallback("password", "Password too short.");
      }
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
      console.warn(error.code, error.message);

      if (error.code === "auth/wrong-password") {
        failCallback("password", "Wrong password. Try again.");
      }

      if (error.code === "auth/internal-error") {
        failCallback("password", "Internal error.");
      }

      if (error.code === "auth/weak-password") {
        failCallback("password", "Password too short.");
      }

      if (error.code === "auth/invalid-email") {
        failCallback("email", "Not a valid email.");
      }

      if (error.code === "auth/too-many-requests") {
        failCallback("password", error.message);
      }
    });
};

export { userExists, signUp, logIn };
