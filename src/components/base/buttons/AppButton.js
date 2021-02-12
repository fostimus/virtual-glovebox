import React from "react";
import { TouchableOpacity, Image } from "react-native";
import AppText from "../AppText";
import tailwind from "tailwind";

export default function AppButton({
  text,
  image,
  style,
  action,
  small,
  large
}) {
  console.log({
    ...tailwind(
      "flex flex-row container justify-evenly items-center " +
        width +
        " p-3 rounded-md my-4 rounded-lg bg-vgb-green "
    ),
    ...style
  });
  if (small && large) {
    // can't do this
  }

  let width = "w-44";
  if (small) width = "w-28";
  if (large) width = "w-60";
  return (
    <TouchableOpacity
      style={{
        ...tailwind(
          "flex flex-row container justify-evenly items-center " +
            width +
            " p-3 rounded-md my-4 rounded-lg bg-vgb-green "
        ),
        ...style
      }}
      onPress={action}
    >
      {image && <Image source={image} />}
      <AppText>{text}</AppText>
    </TouchableOpacity>
  );
}
