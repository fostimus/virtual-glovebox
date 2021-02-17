import React, { useState } from "react";
import { TextInput, Image } from "react-native";
import { AppView, AppText, HorizontalLine } from "base";
import { AppButton } from "base/buttons";
import tailwind from "tailwind-rn";
import { SignInButton, SignInField } from "./options";
import { useNavigation } from "@react-navigation/native";

export default function SingInOptionContainer({
  options,
  emailSignIn,
  setEmailSignIn,
  setFormData,
  authenticate
}) {
  const navigation = useNavigation();

  const placeholders = ["Email", "Password"];

  const line = <HorizontalLine style={tailwind("w-16 bg-black")} />;
  return (
    <AppView style={tailwind("")}>
      <AppButton
        text="Continue"
        large
        action={() => navigation.navigate("Home")}
      />
      <AppView
        style={tailwind("h-10 flex flex-row items-center justify-evenly")}
      >
        {line}
        <AppText bold style={tailwind("text-xl")}>
          or use
        </AppText>
        {line}
      </AppView>
      {emailSignIn
        ? placeholders.map(placeholder => (
            <SignInField
              key={placeholder}
              placeholder={placeholder}
              setFormData={setFormData}
            />
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
