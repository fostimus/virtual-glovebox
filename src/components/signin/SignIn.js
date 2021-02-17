import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { AppText, AppView, AppTitle } from "base";
import { AppButton } from "base/buttons";
import SignInOptionContainer from "./SignInOptionContainer";
import tailwind from "tailwind";
import logo from "./Logo.png";

export default function SignIn() {
  const navigation = useNavigation();

  const [emailSignIn, setEmailSignIn] = useState(false);

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
      <AppView style={tailwind("flex items-center")}>
        <Image source={logo} />
        <AppTitle style={tailwind("w-32 text-center")}>
          Virtual Glovebox
        </AppTitle>
      </AppView>
      <AppText style={tailwind("text-center")}>
        Log in or sign up for free
      </AppText>

      <SignInOptionContainer
        options={["Email", "Google", "Apple"]}
        emailSignIn={emailSignIn}
        setEmailSignIn={setEmailSignIn}
      />
      {footer}
    </AppView>
  );
}
