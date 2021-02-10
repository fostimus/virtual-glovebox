import React from "react";
import { TextInput, Image } from "react-native";
import { AppView } from "../base";
import tailwind from "tailwind-rn";
import SignInOption from "./SignInOption";

export default function SingInOptionContainer({ options }) {
  return (
    <AppView style={tailwind("")}>
      {options.map(option => (
        <SignInOption option={option} />
      ))}
    </AppView>
  );
}
