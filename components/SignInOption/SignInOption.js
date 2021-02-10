import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { View, Text, TextInput, Image } from "react-native";
import tailwind from "tailwind-rn";
import email from "./email.png";

export default function SignInOption({ text }) {
  return (
    <View
      style={tailwind(
        "flex flex-row container justify-evenly items-center w-60 border border-solid border-black bg-blue-300 p-2 rounded"
      )}
    >
      <Image source={email} />
      {/* <Text>{text}</Text> */}
      <Text>{text}</Text>
    </View>
  );
}
