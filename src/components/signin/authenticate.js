const authenticate = () => {
  firebase
    .auth()
    .fetchSignInMethodsForEmail(formData.Email)
    .then(result => {
      if (result.length >= 1) {
        firebase
          .auth()
          .signInWithEmailAndPassword(formData.Email, formData.Password)
          .then(userCredential => {
            // Signed in
            let user = userCredential.user;
            // ...
            console.log(`${user} successfully signed in!`);
            navigation.navigate("Home");
          })
          .catch(error => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(formData.Email, formData.Password)
          .then(userCredential => {
            // Signed in
            let user = userCredential.user;
            // ...
            navigation.navigate("Home");
          })
          .catch(error => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export default authenticate;
