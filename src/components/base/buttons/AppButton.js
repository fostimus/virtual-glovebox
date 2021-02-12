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
  return (
    <TouchableOpacity style={styles} onPress={action}>
      {image && <Image source={image} />}
      <AppText style={styles["color"] && { color: styles["color"] }}>
        {text}
      </AppText>
    </TouchableOpacity>
  );
}
