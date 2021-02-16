import React, { useState } from "react";
import { AppTitle } from "base";
import Screen from "./Screen";
import { FirstStep } from "newvehicle";
import tailwind from "tailwind";

export default function NewVehicleScreen() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Screen loggedIn>
      <AppTitle>Add New Vehicle</AppTitle>
      {currentStep === 0 && <FirstStep />}
    </Screen>
  );
}
