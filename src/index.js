import React from "react";

import { registerRootComponent } from "expo";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, NewSignUpDashboard } from "screens";

const Stack = createStackNavigator();
//TODO: intro react context to pass down navigation info to buttons on edge

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Dashboard" component={NewSignUpDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default registerRootComponent(App);
