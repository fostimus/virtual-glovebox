import React from "react";
import { AppView, AppText } from "base";
import tailwind from "tailwind";

export default function CircleStep({ step }) {
  return (
    <AppView>
      <AppText style={tailwind()}>{step}</AppText>
    </AppView>
  );
}
