import React from "react";
import { AppView, AppText } from "base";
import CircleStep from "./CircleStep";
import tailwind from "tailwind";

export default function CircleStepsContainer({ steps, filledIndex }) {
  return (
    <AppView style={tailwind("w-full h-16 flex flex-row justify-evenly ")}>
      {steps.map((step, index) => (
        <AppView key={step}>
          <CircleStep step={step} filled={index === filledIndex} />
          {index !== steps.length - 1 && (
            <AppView style={tailwind("flex h-full justify-center")}>
              <AppView style={tailwind("h-1 w-10 bg-vgb-secondary")} />
            </AppView>
          )}
        </AppView>
      ))}
    </AppView>
  );
}
