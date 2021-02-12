import React, { useState } from "react";
import { Image } from "react-native";
import { AppText, AppView, AppButton } from "base";
import SignInOptionContainer from "./SignInOptionContainer";
import SignInButton from "./options/SignInButton";
import tailwind from "tailwind";
import placeholder from "./placeholder.png";

export default function SignIn() {
  const [emailSignIn, setEmailSignIn] = useState(false);

  const instructions = emailSignIn
    ? "Sign up with Email"
    : "Log in or sign up for free";

  const footer = emailSignIn ? (
    <AppButton
      large
      style={tailwind("bg-gray-600 text-white")}
      text="Continue"
    />
  ) : (
    <AppText>Skip this step for now</AppText>
  );

  return (
    <AppView style={tailwind("flex flex-col justify-evenly h-full p-16")}>
      <Image source={placeholder} />
      <AppText style={tailwind("text-center")}>{instructions}</AppText>
      <SignInOptionContainer
        options={["Email", "Google", "Apple"]}
        emailSignIn={emailSignIn}
        setEmailSignIn={setEmailSignIn}
      />
      {footer}
    </AppView>
  );
}
