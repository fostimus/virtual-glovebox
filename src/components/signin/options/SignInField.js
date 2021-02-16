import React from "react";
import { TextInput, Image } from "react-native";
import { AppText, AppView } from "base";
import tailwind from "tailwind-rn";
import { styles } from "./optionStyles";

export default function SignInField({ placeholder }) {
  /* use the passed down setState method to set the value on text change. TextInput has a property called 'onChangeText', where you pass in a function that takes a parameter called text that represents the new text when it is changed. */
  return (
    <TextInput
      autoCorrect={false}
      textContentType="emailAddress"
      placeholder={placeholder}
      style={tailwind(styles + " border border-solid border-black")}
    />
  );
}
