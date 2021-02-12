import React from "react";
import { AppView, AppText } from "base";
import { AppCard } from "base/cards";
import { AppButton, SecondaryButton } from "base/buttons";
import Screen from "./Screen";
import tailwind from "tailwind";

export default function NewSignUpDashboard(props) {
  const username = "Derek";

  const options = ["Add Vehicle", "Add Driver's License", "Take a Tour"];

  console.log(props);

  return (
    <Screen loggedIn style={tailwind("flex-1 items-center")}>
      <AppText bold style={tailwind("text-3xl my-4")}>
        Hello, {username}
      </AppText>
      <AppCard title="Get Started:">
        {options.map(option => (
          <SecondaryButton large key={option} text={option} />
        ))}
      </AppCard>
    </Screen>
  );
}
