import React, { useState } from "react";
import { TextInput, Image } from "react-native";
import { AppView, AppText, HorizontalLine } from "base";
import { AppButton } from "base/buttons";
import tailwind from "tailwind-rn";
import { SignInButton, SignInField } from "./options";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../../pages/_app.js";

export default function SignIn({
  options,
  emailSignIn,
  setEmailSignIn,
  setFormData
}) {
  const navigation = useNavigation();

  const placeholders = ["Email", "Password"];

  const line = <HorizontalLine style={tailwind("w-16 bg-black")} />;

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
              // ..
              console.log(errorCode, errorMessage);
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <AppView style={tailwind("")}>
      <AppButton
        text="Continue"
        large
        action={() => navigation.navigate("Home")}
      />
      <AppView
        style={tailwind("h-10 flex flex-row items-center justify-evenly")}
      >
        {line}
        <AppText bold style={tailwind("text-xl")}>
          or use
        </AppText>
        {line}
      </AppView>
      {emailSignIn
        ? placeholders.map(placeholder => (
            <SignInField
              key={placeholder}
              placeholder={placeholder}
              setFormData={setFormData}
            />
          ))
        : options.map(option => (
            <SignInButton
              key={option}
              option={option}
              setEmailSignIn={setEmailSignIn}
            />
          ))}
    </AppView>
  );
}
