import React from "react";
import { AppView, AppText } from "base";
import { AppCard } from "base/cards";
import DashboardCardContainer from "../components/dashboard/DashboardCardContainer";
import Screen from "./Screen";
import tailwind from "tailwind";

/* note:
 * this is eventually going to be the home screen.
 * we will be using useState and useEffect to load the user's cars, notifications/reminders from backend + API integrations
 */
export default function NewSignUpDashboard() {
  const username = "Derek";

  return (
    <Screen loggedIn>
      <AppText bold style={tailwind("text-3xl my-4")}>
        Hello, {username}
      </AppText>
      <DashboardCardContainer />
    </Screen>
  );
}
