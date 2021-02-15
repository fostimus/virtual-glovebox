import React from "react";
import { AppView, AppText } from "base";
import { AppCard } from "base/cards";
import DashboardCardContainer from "../components/dashboard/DashboardCardContainer";
import Screen from "./Screen";
import tailwind from "tailwind";

export default function NewSignUpDashboard(props) {
  const username = "Derek";

  return (
    <Screen loggedIn style={tailwind("flex-1 items-center")}>
      <AppText bold style={tailwind("text-3xl my-4")}>
        Hello, {username}
      </AppText>
      <DashboardCardContainer />
    </Screen>
  );
}
