import React from "react";
import { AppView, AppText, AppTitle } from "base";
import tailwind from "tailwind";

export default function AppCard({ title, titleStyles, style, children }) {
  return (
    <AppView
      style={{
        ...tailwind(
          "flex items-center justify-center w-11/12 rounded-md bg-white"
        ),
        ...style
      }}
    >
      <AppText bold style={{ ...tailwind("my-4 text-2xl"), ...titleStyles }}>
        {title}
      </AppText>
      {children}
    </AppView>
  );
}
