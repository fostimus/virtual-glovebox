import React from "react";
import { Image } from "react-native";
import { AppText, AppView } from "../base";
import SignInOptionContainer from "./SignInOptionContainer";
import placeholder from "./placeholder.png";

export default function SignIn() {
  return (
    <AppView>
      <Image source={placeholder} />
      <AppText>Log in or sign up for free</AppText>
      <SignInOptionContainer options={["Email", "Google", "Apple"]} />
      <AppText>Skip this step for now</AppText>
    </AppView>
  );
}
