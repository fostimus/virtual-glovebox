import React from "react";
import { AppView, AppText } from "base";
import tailwind from "tailwind";

export default function AppCard({ title, titleStyles, children }) {
  return (
    <AppView
      style={tailwind(
        "flex items-center justify-center w-11/12 rounded-md bg-white my-2"
      )}
    >
      <AppText style={{ ...tailwind("mt-4"), ...titleStyles }}>{title}</AppText>
      {children}
    </AppView>
  );
}
