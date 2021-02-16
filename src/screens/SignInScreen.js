import React from "react";
import { AppView } from "base";
import NavBar from "navigation";
import SignIn from "../components/SignIn";
import tailwind from "tailwind";
import Screen from "./Screen";

export default function SignInScreen() {
  return (
    <Screen>
      <SignIn />
    </Screen>
  );
}
