import React from "react";
import { View, TextInput, Image, TouchableOpacity } from "react-native";
import { AppText, AppView, AppButton } from "base";
import { styles } from "./index";
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
      text={"Sign In with " + option}
      image={imgObj[option.toLowerCase()]}
      style="bg-gray-400"
      action={() => option === "Email" && setEmailSignIn(true)}
    />
  );
}
