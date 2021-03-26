import React, { useState, useContext } from "react";
import { AppTitle } from "base";
import Screen from "./Screen";
import { Step } from "newvehicle";
import tailwind from "tailwind";
import { store } from "store";

import { useNavigation } from "@react-navigation/native";

export default function NewVehicleScreen({ route }) {
  const navigation = useNavigation();

  const [currentStep, setCurrentStep] = useState(0);

  const title = "Add New Vehicle";

  const { state, dispatch } = useContext(store);

  return (
    <Screen loggedIn>
      <AppTitle>{title}</AppTitle>
      <Step title={title} step={state.newVehicle.step} question={state.newVehicle.question} />
    </Screen>
  );
}
