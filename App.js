import { StatusBar } from "expo-status-bar";
import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { View, Text, TextInput } from "react-native-tailwind";

const firebaseConfig = {
  apiKey: "AIzaSyBdn3aJkiL5zFqetN9_nG1Aw_y9m1oi-98",
  authDomain: "virtual-glovebox.firebaseapp.com",
  projectId: "virtual-glovebox",
  storageBucket: "virtual-glovebox.appspot.com",
  messagingSenderId: "428139105723",
  appId: "1:428139105723:web:84d388ad87152503b0889e"
}

// const fuego = new Fuego(firebaseConfig)
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
