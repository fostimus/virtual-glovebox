import React from "react";
import { AppView, AppText } from "base";
import { AppCard } from "base/cards";
import { AppButton, SecondaryButton } from "base/buttons";
import tailwind from "tailwind";

export default function NewSignUpDashboard() {
  const username = "Derek";

  const options = ["Add Vehicle", "Add Driver's License", "Take a Tour"];

  return (
    <AppView style={tailwind("flex-1 items-center")}>
      <AppText bold style={tailwind("text-3xl my-4")}>
        Hello, {username}
      </AppText>
      <AppCard title="Get Started:">
        {options.map(option => (
          <SecondaryButton large text={option} />
        ))}
      </AppCard>
    </AppView>
  );
}
