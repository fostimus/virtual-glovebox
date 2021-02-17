import React from "react";
import { AppView, AppText, AppTitle } from "base";
import tailwind from "tailwind";

export default function AppCard({ title, titleStyles, children }) {
  return (
    <AppView
      style={tailwind(
        "flex items-center justify-center w-11/12 rounded-md bg-white my-2"
      )}
    >
      <AppText
        bold
        style={{ ...tailwind("my-6 text-2xl self-start ml-4"), ...titleStyles }}
      >
        {title}
      </AppText>
      {children}
    </AppView>
  );
}
