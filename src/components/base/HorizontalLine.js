import React from "react";
import { AppView } from "base";
import tailwind from "tailwind";

export default function HorizontalLine({ style }) {
  return (
    <AppView style={tailwind("flex h-full justify-center")}>
      <AppView style={{ ...tailwind("h-1 "), ...style }} />
    </AppView>
  );
}
