import React from "react";
import { View, TextInput, Image, TouchableOpacity } from "react-native";
import { AppText, AppView } from "../../base";
import tailwind from "tailwind-rn";
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
    <TouchableOpacity
      onPress={() => {
        if (option === "Email") setEmailSignIn(true);
      }}
      style={tailwind(styles + " bg-gray-400")}
    >
      <Image source={imgObj[option.toLowerCase()]} />
      <AppText bold>Sign In with {option}</AppText>
    </TouchableOpacity>
  );
}
