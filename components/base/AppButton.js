import React from "react";
import { TouchableOpacity } from "react-native";
import AppText from "./AppText";
import { tailwind } from "../../tailwind";

export default function AppButton({ text }) {
  return (
    <TouchableOpacity
      style={tailwind(
        "border border-solid border-black rounded-md bg-vgb-green"
      )}
    >
      <AppText>MyComponent</AppText>
    </TouchableOpacity>
  );
}
