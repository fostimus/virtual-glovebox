import React from "react";
import { AppView, AppText } from "base";
import tailwind from "tailwind";

export default function CircleStep({ filled, step }) {
  const bgColor = filled ? " bg-vgb-secondary" : "";
  const textColor = filled ? "text-vgb-white" : "text-vgb-secondary";

  return (
    <AppView
      centered
      style={tailwind(
        "border border-solid rounded-full w-16 h-16 border-vgb-secondary" +
          bgColor
      )}
    >
      <AppText style={tailwind(textColor)}>{step}</AppText>
    </AppView>
  );
}
