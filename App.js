import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StatusBar } from "expo-status-bar";
import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { TextInput, Image } from "react-native";
import { AppText, AppView } from "./components/base";
import tailwind from "tailwind-rn";
import SignIn from "./components/SignIn";

export default function App() {
  return (
    <NavigationContainer>
      <AppView
        style={tailwind("flex-1 items-center justify-center bg-gray-300")}
      >
        <SignIn options={["Email", "Google", "Apple"]} />
      </AppView>
    </NavigationContainer>
  );
}
