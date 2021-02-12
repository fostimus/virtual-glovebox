import React from "react";
import { TextInput, Image } from "react-native";
import { AppText, AppView } from "base";
import tailwind from "tailwind-rn";
import { styles } from "./optionStyles";

export default function SignInField({ placeholder }) {
  return (
    <TextInput
      autoCorrect={false}
      textContentType="emailAddress"
      placeholder={placeholder}
      style={tailwind(styles + " border border-solid border-black")}
    />
  );
}
