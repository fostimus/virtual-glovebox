import React from "react";
import { View, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";
import baseValues from "./values";

export default function AppView({ style, children }) {
  const combinedStyles = {
    ...styles.base,
    ...style
  };

  return <View style={combinedStyles}>{children}</View>;
}

const styles = StyleSheet.create({
  base: {
    fontSize: baseValues.fontSize
  }
});
