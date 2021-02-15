import React from "react";

import { registerRootComponent } from "expo";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, NewSignUpDashboard, QuickId } from "screens";
import tailwind from "tailwind";

const Stack = createStackNavigator();

// note: navigate will go to an exising entry on the navigation stack if one exists. push will force a new push onto the stack, and will always be a "new" page
// note: use .goBack() to go back one on the navigation stack

// use screenOptions={{ headerShown: false }} on the Stack.Navigator to turn header off
function App() {
  const headerOptions = { title: "", headerStyle: tailwind("h-24 bg-black") };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={headerOptions} />
        <Stack.Screen
          name="Dashboard"
          options={headerOptions}
          component={NewSignUpDashboard}
        />
        <Stack.Screen
          name="Quick ID"
          options={headerOptions}
          component={QuickId}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default registerRootComponent(App);
