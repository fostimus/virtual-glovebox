import React, { useState } from "react";
import { Image } from "react-native";
import { AppView, AppText, AppTitle } from "base";
import SignInOptionContainer from "signin";
import tailwind from "tailwind";
import Screen from "../Screen";
import logo from "./Logo.png";

export default function LandingScreen() {
  const [emailSignIn, setEmailSignIn] = useState(false);

  const [formData, setFormData] = useState({
    Email: "",
    Password: ""
  });

  return (
    <Screen style={tailwind("justify-evenly")}>
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
        options={["Google", "Apple"]}
        emailSignIn={emailSignIn}
        setEmailSignIn={setEmailSignIn}
        setFormData={setFormData}
      />
    </Screen>
  );
}
