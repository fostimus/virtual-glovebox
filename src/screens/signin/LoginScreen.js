import React, { useState } from "react";
import Screen from "../Screen";
import { AppView, AppText, AppTitle } from "base";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen>
      <AppTitle>Log in</AppTitle>
    </Screen>
  );
}
