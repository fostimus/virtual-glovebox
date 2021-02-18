import React, { useState } from "react";
import { AppView, AppText } from "base";
import SignInField from "./SignInField";

export default function SignUpForm({ route }) {
  const [email, setEmail] = useState(
    route.params.email ? route.params.email : ""
  );
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <AppView>
      <SignInField placeholder="Email" value={email} setValue={setEmail} />
      <SignInField placeholder="Name" value={name} setValue={setName} />
      <SignInField
        placeholder="Password"
        value={password}
        setValue={setPassword}
      />
    </AppView>
  );
}
