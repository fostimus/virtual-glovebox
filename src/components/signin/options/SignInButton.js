import React from "react";
import { View, TextInput, Image, TouchableOpacity } from "react-native";
import { AppText, AppView, AppButton } from "base";
import tailwind from "tailwind";
import { styles } from "./optionStyles";
import email from "./email.png";
import google from "./google.png";
import apple from "./apple.png";

const imgObj = {
  email: email,
  google: google,
  apple: apple
};

export default function SignInButton({ option, setEmailSignIn }) {
  return (
    <AppButton
      large
      text={"Sign In with " + option}
      imageLeft
      image={imgObj[option.toLowerCase()]}
      action={() => option === "Email" && setEmailSignIn(true)}
    />
  );
}