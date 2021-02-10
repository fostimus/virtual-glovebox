import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import tailwind from "tailwind-rn";
import SignInOption from "./SignInOption";

export default function SingInOptionContainer({ options }) {
  return (
    <View style={tailwind("")}>
      {options.map(option => (
        <SignInOption option={option} />
      ))}
    </View>
  );
}
