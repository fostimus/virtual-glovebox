import React from "react";
import { AppButton } from "base/buttons";
import email from "./email.png";
import google from "./google.png";
import apple from "./apple.png";

const imgObj = {
  email: email,
  google: google,
  apple: apple
};

export default function SignInButton({ option, setEmailSignIn }) {
  return (
    <AppButton
      large
      text={"Sign In with " + option}
      image={imgObj[option.toLowerCase()]}
      imageOptions={{ imageLeft: true }}
      action={() => option === "Email" && setEmailSignIn(true)}
    />
  );
}
