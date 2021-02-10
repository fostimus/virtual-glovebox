import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { View, TextInput, Image } from "react-native";
import AppText from "../base/AppText";
import AppView from "../base/AppView";
import tailwind from "tailwind-rn";
import email from "./email.png";
import google from "./google.png";

const imgObj = {
  email: email,
  google: google
  // apple: apple
};

export default function SignInOption({ option }) {
  return (
    <AppView
      style={tailwind(
        "flex flex-row container justify-evenly items-center w-60 bg-gray-400 p-3 rounded my-4"
      )}
    >
      <Image source={imgObj[option.toLowerCase()]} />
      <AppText>Sign In with {option}</AppText>
    </AppView>
  );
}
