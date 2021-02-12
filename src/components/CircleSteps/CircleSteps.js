import React from "react";
import { AppView, AppText } from "base";

export default function CircleSteps({ title }) {
  return (
    <AppView>
      <AppText>{title}</AppText>
      <CircleStepsContainer steps={["1", "2", "3"]} />
    </AppView>
  );
}
