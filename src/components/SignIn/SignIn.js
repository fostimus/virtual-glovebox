import React, { useState } from "react";
import { Image } from "react-native";
import { AppText, AppView } from "base";
import SignInOptionContainer from "./SignInOptionContainer";
import tailwind from "tailwind";
import placeholder from "./placeholder.png";

export default function SignIn() {
  const [emailSignIn, setEmailSignIn] = useState(false);

  const instructions = emailSignIn
    ? "Sign up with Email"
    : "Log in or sign up for free";

  return (
    <AppView style={tailwind("flex flex-col justify-evenly h-full p-16")}>
      <Image source={placeholder} />
      <AppText style={tailwind("text-center")}>{instructions}</AppText>
      <SignInOptionContainer
        options={["Email", "Google", "Apple"]}
        emailSignIn={emailSignIn}
        setEmailSignIn={setEmailSignIn}
      />
      <AppText>Skip this step for now</AppText>
    </AppView>
  );
}
