import React, { useContext } from "react";
import { AppTitle } from "base";
import Screen from "./Screen";
import { Step } from "newvehicle";
import { store } from "store";

export default function NewVehicleScreen() {
  const title = "Add New Vehicle";

  const { state } = useContext(store);

  return (
    <Screen loggedIn>
      <AppTitle>{title}</AppTitle>
      <Step title={title} step={state.newVehicle.step} question={state.newVehicle.question} />
    </Screen>
  );
}
