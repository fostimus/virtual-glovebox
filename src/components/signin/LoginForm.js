import React, { useState } from "react";
import { AppView, AppText } from "base";
import { AppButton } from "base/buttons";
import SignInField from "./SignInField";
import tailwind from "tailwind";
import { logIn } from "./authenticate";
import { useNavigation } from "@react-navigation/native";

export default function LoginForm({ inputEmail }) {
  const navigation = useNavigation();

  const [email, setEmail] = useState(inputEmail ? inputEmail : "");
  const [password, setPassword] = useState("");

  const buttonDisabled = email === "" || password === "";

  return (
    <AppView>
      <SignInField placeholder="Email" value={email} setValue={setEmail} />
      <SignInField
        placeholder="Password"
        value={password}
        setValue={setPassword}
      />
      <AppText bold style={tailwind("text-center text-gray-500")}>
        Forgot password?
      </AppText>

      <AppButton
        disabled={buttonDisabled}
        large
        bold
        text="Log In"
        action={() => logIn(email, password, () => navigation.navigate("Home"))}
      />
    </AppView>
  );
}
