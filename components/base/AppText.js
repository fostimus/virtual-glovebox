import React from "react";
import { Text, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";
import baseValues from "./values";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

export default function AppText({ style, bold, children }) {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  let combinedStyles = {
    ...styles.base,
    ...style
  };

  if (bold) {
    combinedStyles = {
      ...combinedStyles,
      ...styles.bold
    };
  }
  return <Text style={combinedStyles}>{children}</Text>;
}

const styles = StyleSheet.create({
  base: {
    fontSize: baseValues.fontSize,
    fontFamily: "Roboto_400Regular"
  },
  bold: {
    fontFamily: "Roboto_700Bold"
  }
});
