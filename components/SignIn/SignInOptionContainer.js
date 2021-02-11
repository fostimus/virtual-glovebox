import React, { useState } from "react";
import { TextInput, Image } from "react-native";
import { AppView } from "../base";
import tailwind from "tailwind-rn";
import { SignInButton, SignInField } from "./options";

export default function SingInOptionContainer({ options }) {
  const [emailSignIn, setEmailSignIn] = useState(false);

  const placeholders = ["Name", "Email", "Password"];

  return (
    <AppView style={tailwind("")}>
      {emailSignIn
        ? placeholders.map(placeholder => (
          <SignInField key={placeholder} placeholder={placeholder} />
        ))
        : options.map(option => (
          <SignInButton
            key={option}
              option={option}
              setEmailSignIn={setEmailSignIn}
            />
          ))}
    </AppView>
  );
}
