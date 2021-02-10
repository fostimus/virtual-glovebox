import React from "react";
import { Text, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";
import baseValues from "./values";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

export default function AppText({ style, bold, italic, children }) {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const appStyles = styleHelper(style, bold, italic);

  return <Text style={appStyles}>{children}</Text>;
}

const styles = StyleSheet.create({
  base: {
    fontSize: baseValues.fontSize,
    fontFamily: "Roboto_400Regular"
  },
  bold: {
    fontFamily: "Roboto_700Bold"
  },
  italic: {
    fontFamily: "Roboto_400Regular_Italic"
  },
  boldItalic: {
    fontFamily: "Roboto_700Bold_Italic"
  }
});

function styleHelper(parentStyles, bold, italic) {
  let combinedStyles = {
    ...styles.base,
    ...parentStyles
  };

  if (bold) {
    combinedStyles = {
      ...combinedStyles,
      ...styles.bold
    };
  }

  if (italic) {
    combinedStyles = {
      ...combinedStyles,
      ...styles.italic
    };
  }

  if (bold && italic) {
    combinedStyles = {
      ...combinedStyles,
      ...styles.boldItalic
    };

    console.log(combinedStyles);
  }

  return combinedStyles;
}
