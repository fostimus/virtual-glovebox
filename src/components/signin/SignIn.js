import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { AppText, AppView, AppButton } from "base";
import SignInOptionContainer from "./SignInOptionContainer";
import tailwind from "tailwind";
import placeholder from "./placeholder.png";

export default function SignIn() {
  const navigation = useNavigation();

  const [emailSignIn, setEmailSignIn] = useState(false);
  //TODO: set up state variable to hold name, email, and password values here

  const instructions = emailSignIn
    ? "Sign up with Email"
    : "Log in or sign up for free";

  const footer = emailSignIn ? (
    <AppButton
      large
      text="Continue"
      action={() => navigation.navigate("Home")}
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
      />
      {footer}
    </AppView>
  );
}
