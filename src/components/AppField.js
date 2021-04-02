import React from "react";
import { TextInput } from "react-native";
import tailwind from "tailwind-rn";

//TODO: style this for reuse
export default function SignInField({ placeholder, value, onChangeText, onBlur }) {
  return (
    <TextInput
      autoCorrect={false}
      textContentType="emailAddress"
      placeholder={placeholder}
      onChangeText={onChangeText}
      onBlur={onBlur}
      style={tailwind(
        "flex flex-row container justify-evenly items-center  p-3 rounded-md  border border-solid border-black bg-white"
      )}
    >
      {value}
    </TextInput>
  );
}
