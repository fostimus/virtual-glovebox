import React from "react";
import { AppView } from "base";
import NavBar from "navigation";

//note: this is not an actual screen. it is a template, or a LAYOUT to be used as the base for other screens
export default function Screen({ style, loggedIn, children }) {
  return (
    <AppView style={style}>
      {children}
      {loggedIn && <NavBar />}
    </AppView>
  );
}
