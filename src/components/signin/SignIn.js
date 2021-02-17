import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { AppText, AppView } from "base";
import { AppButton } from "base/buttons";
import SignInOptionContainer from "./SignInOptionContainer";
import tailwind from "tailwind";
import placeholder from "./placeholder.png";
import { firebase } from "../../../pages/_app.js";

export default function SignIn() {
  const navigation = useNavigation();

  const [emailSignIn, setEmailSignIn] = useState(false);
  //TODO: set up state variable to hold name, email, and password values here
  const [formData, setFormData] = useState({
    Email: '',
    Password: ''
  })
  const [errorMessage, setErrorMessage] = useState('');

  const authenticate = () => {
    firebase.auth().fetchSignInMethodsForEmail(formData.Email)
      .then((result) => {
        if (result.length >= 1) {
          firebase.auth().signInWithEmailAndPassword(formData.Email, formData.Password)
            .then((userCredential) => {
            let user = userCredential.user;
            console.log(`${user} successfully signed in!`)
            navigation.navigate("Home")
          })
          .catch((error) => {
            let errorCode = error.code;

            if (errorCode === 'auth/wrong-password') {
              setErrorMessage('Invalid password.')
            }

            if (errorCode === 'auth/internal-error') {
              setErrorMessage('Internal error.')
            }

            if (errorCode === 'auth/weak-password') {
              setErrorMessage('Password too short.')
            }

            if (errorCode === 'auth/invalid-email') {
              setErrorMessage('Not a valid email.')
            }
          })
        } else {
          firebase.auth().createUserWithEmailAndPassword(formData.Email, formData.Password)
            .then((userCredential) => {
            let user = userCredential.user;
            navigation.navigate("Home")
          })
          .catch((error) => {
            let errorCode = error.code;

            if (errorCode === 'auth/invalid-email') {
              setErrorMessage('Not a valid email.')
            }

            if (errorCode === 'auth/weak-password') {
              setErrorMessage('Password too short.')
            }
          });
        }
      })
      .catch((error) => {
        console.log(error)
      })
}

  const instructions = emailSignIn
    ? "Sign up with Email"
    : "Log in or sign up for free";

  const footer = emailSignIn ? (
    <AppButton
      large
      text="Continue"
      action={authenticate}
    />
  ) : (
    <AppText>Skip this step for now</AppText>
  );

  return (
    <AppView style={tailwind("flex flex-col justify-evenly h-full p-16")}>
      <Image source={placeholder} />
      <AppText style={tailwind("text-center")}>{instructions}</AppText>
      {/* pass down name, email, password setState methods here */}
      <SignInOptionContainer
        options={["Email", "Google", "Apple"]}
        emailSignIn={emailSignIn}
        setEmailSignIn={setEmailSignIn}
        setFormData={setFormData}
      />
      {footer}
      <AppText style={tailwind("text-center")}>{errorMessage}</AppText>
    </AppView>
  );
}