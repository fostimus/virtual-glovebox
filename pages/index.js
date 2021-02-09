// @generated: @expo/next-adapter@2.1.59
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import App from "../App";

export default function Home() {
  return (
    <>
      <App />
      <div>test</div>
    </>
  );
}

/*
<View style={styles.container}>
  <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
</View>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 16
  }
});
