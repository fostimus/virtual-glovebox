import React from "react";
import { AppView, AppText } from "base";

export default function AppCard({ title, children }) {
  return (
    <AppView>
      <AppText>{tile}</AppText>
      {children}
    </AppView>
  );
}
