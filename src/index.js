import { registerRootComponent } from "expo";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { TextInput, Image, Button } from "react-native";
import { AppText, AppView, AppButton } from "base";
import tailwind from "tailwind";
import SignIn from "./components/SignIn";

const Stack = createStackNavigator();
//TODO: intro react context to pass down navigation info to buttons on edge

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={() => <Home />}
          options={{ title: "Welcome" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  return (
    <AppView style={tailwind("flex-1 items-center justify-center bg-gray-300")}>
      <SignIn />
      <AppButton text="bn" />
    </AppView>
  );
}

export default registerRootComponent(App);
