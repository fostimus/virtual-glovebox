import React from "react";
import { TouchableOpacity, Image } from "react-native";
import AppText from "../AppText";
import tailwind from "tailwind";

export default function AppButton({
  text,
  image,
  imageOptions,
  style,
  action,
  small,
  large
}) {
  let width = "w-44";
  if (small) width = "w-28";
  if (large) width = "w-60";
  const styles = {
    ...tailwind(
      "flex flex-row container justify-evenly items-center " +
        width +
        " p-3 rounded-md my-4 rounded-lg bg-vgb-primary "
    ),
    ...style
  };

  if (small && large) {
    // can't do this
  }

  if (!imageOptions) {
    imageOptions = {};
  }

  let textStyles = tailwind("text-lg");
  if (styles["color"]) textStyles = { ...textStyles, color: styles["color"] };

  return (
    <TouchableOpacity style={styles} onPress={action}>
      {imageOptions.imageLeft && <Image source={image} />}
      <AppText style={textStyles}>{text}</AppText>
      {imageOptions.imageRight && (
        <Image source={image} style={imageOptions.style} />
      )}
    </TouchableOpacity>
  );
}
