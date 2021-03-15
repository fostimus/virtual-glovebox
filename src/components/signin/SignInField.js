import React from "react";
import { TextInput } from "react-native";
import { AppText, AppView } from "base";
import tailwind from "tailwind-rn";

export default function SignInField({
  placeholder,
  value,
  setValue,
  validate,
  error
}) {
  /* use the passed down setState method to set the value on text change. TextInput has a property called 'onChangeText', where you pass in a function that takes a parameter called text that represents the new text when it is changed. */

  return (
    <AppView style={tailwind("w-60 my-4")}>
      <TextInput
        autoCorrect={false}
        textContentType="emailAddress"
        placeholder={placeholder}
        onChangeText={text => {
          setValue(text);
        }}
        onBlur={validate}
        style={tailwind(
          "flex flex-row container justify-evenly items-center  p-3 rounded-md  border border-solid border-black bg-white"
        )}
      >
        {value}
      </TextInput>
      {error ? (
        <AppText style={tailwind("text-red-500 text-xs mt-1 text-justify")}>
          {error}
        </AppText>
      ) : null}
    </AppView>
  );
}
