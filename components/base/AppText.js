import React from "react";
import { Text, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";
import baseValues from "./values";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

export default function AppText({ style, children }) {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const combinedStyles = {
    ...styles.base,
    ...style
  };
  return <Text style={combinedStyles}>{children}</Text>;
}

const styles = StyleSheet.create({
  base: {
    fontSize: baseValues.fontSize,
    fontFamily: "Roboto_400Regular"
  }
});
