import React, { useState } from "react";
import { AppTitle } from "base";
import Screen from "./Screen";
import { FirstStep } from "newvehicle";
import tailwind from "tailwind";

export default function NewVehicleScreen() {
  const [currentStep, setCurrentStep] = useState(0);

  const title = "Add New Vehicle";

  return (
    <Screen loggedIn>
      <AppTitle>{title}</AppTitle>
      {currentStep === 0 && <FirstStep title={title} />}
    </Screen>
  );
}
