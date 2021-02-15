import React from "react";
import { AppView } from "base";
import NavBar from "navigation";
import SignIn from "../components/SignIn";
import tailwind from "tailwind";

export default function Home() {
  return (
    <AppView style={tailwind("flex-1 items-center justify-center bg-gray-300")}>
      <SignIn />
    </AppView>
  );
}
