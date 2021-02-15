import React from "react";
import { AppView } from "base";
import Screen from "./Screen";

import SignIn from "../components/SignIn";
import tailwind from "tailwind";

export default function Home({ navigation }) {
  return (
    <Screen loggedIn>
      <SignIn navigation={navigation} />
    </Screen>
  );
}
