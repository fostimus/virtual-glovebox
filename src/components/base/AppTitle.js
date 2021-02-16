import React from "react";
import AppText from "./AppText";
import tailwind from "tailwind";

export default function AppTitle({ children }) {
  return (
    <AppText bold style={tailwind("text-3xl my-6")}>
      {children}
    </AppText>
  );
}
