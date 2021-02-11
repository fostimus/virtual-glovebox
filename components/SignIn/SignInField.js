import React from "react";
import { TextInput, Image } from "react-native";
import { AppText, AppView } from "../base";
import tailwind from "tailwind-rn";

export default function SignInField({ placeholder }) {
  return (
    <AppView
      style={tailwind(
        "flex flex-row container justify-evenly items-center w-60 bg-gray-400 p-3 rounded-md my-4"
      )}
    >
      <TextInput placeholder={placeholder} />
    </AppView>
  );
}
