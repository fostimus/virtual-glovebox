import React from "react";
import { AppView, AppText, HorizontalLine } from "base";
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
            <HorizontalLine style={tailwind("w-10 bg-vgb-secondary")} />
          )
        })
      )}
    </AppView>
  );
}
