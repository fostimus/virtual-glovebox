import React from "react";
import { TouchableOpacity, Image } from "react-native";
import AppText from "../AppText";
import { tailwind } from "tailwind";

export default function AppButton({ text, image, style, action }) {
  return (
    <TouchableOpacity
      style={tailwind(
        "flex flex-row container justify-evenly items-center w-60 p-3 rounded-md my-4 rounded-lg bg-vgb-green " +
          style
      )}
      onPress={action}
    >
      {image && <Image source={image} />}
      <AppText>{text}</AppText>
    </TouchableOpacity>
  );
}
