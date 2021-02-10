import { StatusBar } from "expo-status-bar";
import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { View, Text, TextInput, Image } from "react-native";
import tailwind from "tailwind-rn";
import SignIn from "./components/SignIn";

export default function App() {
  return (
    <View
      style={tailwind(
        "flex-1  items-center justify-center bg-gray-300 lg:bg-blue-500"
      )}
    >
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <TextInput
        style={tailwind(
          "border border-dashed lg:border-solid  w-48 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        )}
        placeholder="Type here"
      />
      <SignIn options={["Email", "Google", "Apple"]} />
    </View>
  );
}
