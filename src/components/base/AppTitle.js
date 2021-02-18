import React from "react";
import AppText from "./AppText";
import tailwind from "tailwind";

export default function AppTitle({ children, style }) {
  return (
    <AppText bold style={{ ...tailwind("text-3xl my-6"), ...style }}>
      {children}
    </AppText>
  );
}
