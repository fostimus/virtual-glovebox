import React from "react";
import { AppView, AppText, AppTitle } from "base";
import { SignUpForm } from "signin";
import Screen from "../Screen";

export default function SignUpScreen({ route }) {
  // note: ?. syntax is called "optional chaining". it allows you to check for field deep within an object, without having to worry about null/undefined along the way
  return (
    <Screen>
      <AppTitle>Sign Up</AppTitle>
      <SignUpForm inputEmail={route?.params?.email} />
    </Screen>
  );
}
