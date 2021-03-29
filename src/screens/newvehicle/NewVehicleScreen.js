import React from "react";
import { AppTitle } from "base";
import Screen from "screens/Screen";
import { Step } from "newvehicle";
import { title, StateProvider } from "./store";

export default function NewVehicleScreen() {
  return (
    <StateProvider>
      <Screen loggedIn>
        <AppTitle>{title}</AppTitle>
        <Step />
      </Screen>
    </StateProvider>
  );
}
