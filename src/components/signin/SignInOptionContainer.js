import React, { useState } from "react";
import { TextInput, Image } from "react-native";
import { AppView } from "base";
import tailwind from "tailwind-rn";
import { SignInButton, SignInField } from "./options";

export default function SingInOptionContainer({
  options,
  emailSignIn,
  setEmailSignIn,
  setFormData
}) {
  const placeholders = ["Email", "Password"];

  return (
    <AppView style={tailwind("")}>
      {/* pass down the correct setState method for email, password, and name to the SignInField component */}
      {emailSignIn
        ? placeholders.map(placeholder => (
            <SignInField key={placeholder} placeholder={placeholder} setFormData={setFormData} />
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