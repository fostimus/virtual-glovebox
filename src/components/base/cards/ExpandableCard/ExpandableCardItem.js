import React from "react";
import { AppView, AppText } from "base";
import tailwind from "tailwind";

export default function ExpandableCardItem({ title, borderBottom }) {
  let borderStyles = "border-t-2 border-r-2 border-l-2";
  if (borderBottom) borderStyles = borderStyles + " border-b-2";
  return (
    <AppView
      style={tailwind(
        borderStyles +
          " rounded-md border-solid w-full border-vgb-card-border bg-vgb-white"
      )}
    >
      <AppText style={tailwind("text-xl ml-6")}>{title}</AppText>
    </AppView>
  );
}
