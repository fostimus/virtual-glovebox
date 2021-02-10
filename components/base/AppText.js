import React from "react";
import { Text, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";
import baseValues from "./values";

export default function AppText({ style, children }) {
  const combinedStyles = {
    ...styles.base,
    ...style
  };
  return <Text style={combinedStyles}>{children}</Text>;
}

const styles = StyleSheet.create({
  base: {
    fontSize: baseValues.fontSize,
    fontFamily: baseValues.fontFamily
  }
});
