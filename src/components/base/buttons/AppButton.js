import React from "react";
import { TouchableOpacity, Image } from "react-native";
import AppText from "../AppText";
import tailwind from "tailwind";

export default function AppButton({
  text,
  image,
  imageOptions,
  style,
  textStyles = tailwind("text-lg"),
  action,
  small,
  large,
  bold,
  disabled,
}) {
  let width = "w-44";
  if (small) width = "w-28";
  if (large) width = "w-60";

  let styles = {
    ...tailwind(
      "flex flex-row container justify-evenly items-center " +
        width +
        " p-3 rounded-md my-4 rounded-lg bg-vgb-primary "
    ),
    ...style,
  };

  const disabledStyles = tailwind("bg-gray-400 text-gray-700");

  if (disabled)
    styles = {
      ...styles,
      ...disabledStyles,
    };

  if (small && large) {
    // can't do this
  }

  if (!imageOptions) {
    imageOptions = {};
  }

  return (
    <TouchableOpacity disabled={disabled} style={styles} onPress={action}>
      {imageOptions.imageLeft && <Image source={image} />}
      <AppText bold={bold} style={textStyles}>
        {text}
      </AppText>
      {imageOptions.imageRight && <Image source={image} style={imageOptions.style} />}
    </TouchableOpacity>
  );
}
