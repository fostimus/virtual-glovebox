import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { AppText, AppView, AppButton } from "base";
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

  const authenticate = () => {
    firebase.auth().fetchSignInMethodsForEmail(formData.Email)
      .then((result) => {
        console.log(result.length)
        if (result.length >= 1) {
          firebase.auth().signInWithEmailAndPassword(formData.Email, formData.Password)
            .then((userCredential) => {
            // Signed in
            let user = userCredential.user;
            // ...
            console.log(`${user} successfully signed in!`)
            navigation.navigate("Home")
          })
          .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode, errorMessage)
          })
        } else {
          firebase.auth().createUserWithEmailAndPassword(formData.Email, formData.Password)
            .then((userCredential) => {
            // Signed in 
            let user = userCredential.user;
            // ...
            navigation.navigate("Home")
          })
          .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            // ..
            console.log(errorCode, errorMessage)
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
    </AppView>
  );
}