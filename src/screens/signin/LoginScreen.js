import React, { useState } from "react";
import Screen from "../Screen";
import { AppView, AppText, AppTitle } from "base";
import { LoginForm } from "signin";

export default function LoginScreen({ route }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen>
      <AppTitle>Log in</AppTitle>
      <LoginForm inputEmail={route?.params?.email} />
    </Screen>
  );
}
