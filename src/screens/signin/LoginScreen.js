import React, { useState } from "react";
import Screen from "../Screen";
import { AppView, AppText, AppTitle } from "base";
import { LoginForm, SignInThirdParty } from "signin";
import thirdPartyOptions from "./thirdPartyOptions";

export default function LoginScreen({ route }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen>
      <AppTitle>Log in</AppTitle>
      <LoginForm inputEmail={route?.params?.email} />
      <SignInThirdParty options={thirdPartyOptions} />
    </Screen>
  );
}
