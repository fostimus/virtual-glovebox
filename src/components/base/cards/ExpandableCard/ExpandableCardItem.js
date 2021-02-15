import React from "react";
import { AppView, AppText } from "base";
import tailwind from "tailwind";

export default function ExpandableCardItem({ title }) {
  return (
    <AppView style={tailwind("border border-solid w-full")}>
      <AppText>{title}</AppText>
    </AppView>
  );
}
