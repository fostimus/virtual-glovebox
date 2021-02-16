import React from "react";
import { View, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";
import baseValues from "./values";

export default function AppView({ style, centered, children }) {
  let combinedStyles = {
    ...styles.base,
    ...style
  };

  if (centered)
    combinedStyles = {
      ...combinedStyles,
      ...tailwind("flex justify-center items-center")
    };

  return <View style={combinedStyles}>{children}</View>;
}

const styles = StyleSheet.create({
  base: {
    fontSize: baseValues.fontSize
  }
});
