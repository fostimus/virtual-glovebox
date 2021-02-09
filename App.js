import { StatusBar } from "expo-status-bar";
import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { View, Text, TextInput } from "react-native-tailwind";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-300">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <TextInput
        className="border border-solid focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        placeholder="Type here"
      />
    </View>
  );
}
