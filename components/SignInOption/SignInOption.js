import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { View, Text, TextInput, Image } from "react-native-tailwind";
import email from "./email.png";

export default function SignInOption({ text }) {
  return (
    <>
      <Image source={email} />
      <Text className="w-60 border border-solid border-black bg-blue-300">
        {text}
      </Text>
    </>
  );
}
