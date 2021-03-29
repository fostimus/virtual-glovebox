import React from "react";
import { db } from "./firebase";
import { registerRootComponent } from "expo";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LandingScreen, SignUpScreen, LoginScreen } from "screens/signin";
import { HomeScreen, QuickId } from "screens";
import { NewVehicleScreen, NewVehicleFormScreen, NewVehicleStateProvider } from "screens/newvehicle";
import tailwind from "tailwind";

const Stack = createStackNavigator();

// note: navigate will go to an exising entry on the navigation stack if one exists. push will force a new push onto the stack, and will always be a "new" page
// note: use .goBack() to go back one on the navigation stack

// use screenOptions={{ headerShown: false }} on the Stack.Navigator to turn header off
const headerOptions = { title: "", headerStyle: tailwind("h-24 bg-black") };
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing Screen" component={LandingScreen} options={headerOptions} />
        <Stack.Screen name="Sign Up Screen" component={SignUpScreen} options={headerOptions} />
        <Stack.Screen name="Log In Screen" component={LoginScreen} options={headerOptions} />
        <Stack.Screen name="Home" component={HomeScreen} options={headerOptions} />
        <Stack.Screen name="New Vehicle" component={NewVehicleFlow} options={headerOptions} />
        <Stack.Screen name="Quick ID" options={headerOptions} component={QuickId} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const NewVehicle = createStackNavigator();
function NewVehicleFlow() {
  return (
    <NewVehicleStateProvider>
      <NewVehicle.Navigator headerShown={false}>
        <NewVehicle.Screen name="Add New Vehicle" component={NewVehicleScreen} />
        <NewVehicle.Screen name="New Vehicle Form" component={NewVehicleFormScreen} />
      </NewVehicle.Navigator>
    </NewVehicleStateProvider>
  );
}

export default registerRootComponent(App);
