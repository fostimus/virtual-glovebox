import React from "react";
import { AppView, AppText } from "base";
import CircleStepsContainer from "./CircleStepsContainer";
import tailwind from "tailwind";

export default function CircleSteps({ title, filledIndex }) {
  return (
    <CircleStepsContainer steps={["1", "2", "3"]} filledIndex={filledIndex} />
  );
}
