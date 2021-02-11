import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { TextInput, Image, Button } from "react-native";
import { AppText, AppView, AppButton } from "./components/base";
import tailwind from "tailwind-rn";
import SignIn from "./components/SignIn";

const Stack = createStackNavigator();
//TODO: intro react context to pass down navigation info to buttons on edge

// const firebaseConfig = {
//   apiKey: "AIzaSyBdn3aJkiL5zFqetN9_nG1Aw_y9m1oi-98",
//   authDomain: "virtual-glovebox.firebaseapp.com",
//   projectId: "virtual-glovebox",
//   storageBucket: "virtual-glovebox.appspot.com",
//   messagingSenderId: "428139105723",
//   appId: "1:428139105723:web:84d388ad87152503b0889e"
// }
// const fuego = new Fuego(firebaseConfig)
export default function App() {
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
      <AppButton />
    </AppView>
  );
}
