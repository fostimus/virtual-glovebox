import React, { useState } from "react";
import { AppView, AppText } from "base";
import SignInField from "./SignInField";

export default function LoginForm({ inputEmail }) {
  const [email, setEmail] = useState(inputEmail ? inputEmail : "");
  const [password, setPassword] = useState("");

  return (
    <AppView>
      <SignInField placeholder="Email" value={email} setValue={setEmail} />
      <SignInField
        placeholder="Password"
        value={password}
        setValue={setPassword}
      />
    </AppView>
  );
}
