import React from "react";
import { AppButton } from "base/buttons";

export default function SignInButton({ option }) {
  return (
    <AppButton
      large
      text={"Sign In with " + option.name}
      image={option.icon}
      imageOptions={{ imageLeft: true }}
    />
  );
}
