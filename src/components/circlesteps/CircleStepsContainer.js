import React from "react";
import { AppView, AppText } from "base";
import CircleStep from "./CircleStep";
import tailwind from "tailwind";
// weird/interesting to solution from React to use keyed fragments
import createFragment from "react-addons-create-fragment";

export default function CircleStepsContainer({ steps, filledIndex }) {
  return (
    <AppView style={tailwind("w-full h-16 flex flex-row justify-evenly ")}>
      {steps.map((step, index) =>
        createFragment({
          left: <CircleStep step={step} filled={index === filledIndex} />,
          right: index !== steps.length - 1 && (
            <AppView style={tailwind("flex h-full justify-center")}>
              <AppView style={tailwind("h-1 w-10 bg-vgb-secondary")} />
            </AppView>
          )
        })
      )}
    </AppView>
  );
}
