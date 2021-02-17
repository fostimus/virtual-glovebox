import React from "react";
import { AppView } from "base";
import NavBar from "navigation";
import SignIn from "signin";
import tailwind from "tailwind";
import Screen from "./Screen";

export default function LandingScreen() {
  return (
    <Screen>
      <SignIn />
    </Screen>
  );
}
