import React, { useState } from "react";
import { TextInput, Image } from "react-native";
import { AppView } from "../base";
import tailwind from "tailwind-rn";
import SignInOption from "./SignInOption";
import SignInField from "./SignInField";

export default function SingInOptionContainer({ options }) {
  const [emailSignIn, setEmailSignIn] = useState(false);

  const placeholders = ["Name", "Email", "Password"];

  //TODO: replace contents with SignInField to test/develop the SignInField more
  return (
    <AppView style={tailwind("")}>
      {options.map(option => (
        <SignInOption option={option} />
      ))}
    </AppView>
  );
}
