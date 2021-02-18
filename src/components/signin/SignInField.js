import React from "react";
import { TextInput, Image } from "react-native";
import { AppText, AppView } from "base";
import tailwind from "tailwind-rn";

export default function SignInField({ placeholder, value, setValue }) {
  /* use the passed down setState method to set the value on text change. TextInput has a property called 'onChangeText', where you pass in a function that takes a parameter called text that represents the new text when it is changed. */
  return (
    <TextInput
      autoCorrect={false}
      textContentType="emailAddress"
      placeholder={placeholder}
      onChangeText={text => {
        setValue(text);
      }}
      style={tailwind(
        "flex flex-row container justify-evenly items-center w-60 p-3 rounded-md my-4 border border-solid border-black bg-white"
      )}
    >
      {value}
    </TextInput>
  );
}
