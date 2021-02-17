import React from "react";
import { AppView, AppText, HorizontalLine } from "base";
import SignInButton from "./SignInButton";
import tailwind from "tailwind";

export default function SignInThirdParty({ options }) {
  const line = <HorizontalLine style={tailwind("w-16 bg-black")} />;
  return (
    <>
      <AppView
        style={tailwind(
          "w-full h-10 flex flex-row items-center justify-evenly"
        )}
      >
        {line}
        <AppText bold style={tailwind("text-xl")}>
          {" "}
          or use{" "}
        </AppText>
        {line}
      </AppView>
      {options.map(option => (
        <SignInButton key={option} option={option} />
      ))}
    </>
  );
}
