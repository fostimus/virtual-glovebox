import React from "react";
import { AppTitle } from "base";
import Screen from "screens/Screen";
import { Step } from "newvehicle";
import { title } from "./store";

export default function NewVehicleScreen({ route }) {
  return (
    <Screen loggedIn>
      <AppTitle>{title}</AppTitle>
      <Step state={route?.params?.state} />
    </Screen>
  );
}
