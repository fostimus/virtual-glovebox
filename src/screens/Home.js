import React from "react";
import { AppView } from "base";
import Screen from "./Screen";

import SignIn from "../components/SignIn";
import tailwind from "tailwind";

export default function Home({ navigation }) {
  return (
    <Screen
      loggedIn
      style={tailwind("flex-1 items-center justify-center bg-gray-300")}
    >
      <SignIn navigation={navigation} />
    </Screen>
  );
}
