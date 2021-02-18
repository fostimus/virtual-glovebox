import { firebase } from "../../../pages/_app.js";

const userExists = async email => {
  const result = await firebase.auth().fetchSignInMethodsForEmail(email);

  return result.length >= 1;
};

const signUp = (email, password, successCallback) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      successCallback();
    })
    .catch(error => {
      console.log(error.code, error.message);
    });
};

const logIn = (email, password, successCallback) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      successCallback();
    })
    .catch(error => {
      console.log(error.code, error.message);
    });
};

export { userExists, signUp, logIn };
