import React from "react";
import { AppView } from "base";
import NavBar from "navigation";
import tailwind from "tailwind";

//note: this is not an actual screen. it is a template, or a LAYOUT to be used as the base for other screens
export default function Screen({ style, loggedIn, render, children }) {
  return (
    <AppView
      style={{
        ...tailwind("flex container items-center h-full w-full bg-gray-300"),
        ...style,
      }}
    >
      {children}
      {loggedIn && <NavBar />}
    </AppView>
  );
}
