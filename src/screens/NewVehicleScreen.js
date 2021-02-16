import React from "react";
import CircleSteps from "circlesteps";
import { AppView, AppText, AppTitle } from "base";
import { AppButton } from "base/buttons";
import Screen from "./Screen";
import tailwind from "tailwind";

export default function NewVehicleScreen() {
  //note: make a "AppTitle" component to auto style the title of each page
  return (
    <Screen loggedIn>
      <AppTitle>Add New Vehicle</AppTitle>
      <AppView style={tailwind("flex items-center h-4/6 justify-around")}>
        <CircleSteps filledIndex={0} />
        <AppText>Do you have your vehicle's registration card?</AppText>
        <AppView>
          <AppButton small text="Yes" />
          <AppButton small text="No" />
        </AppView>
      </AppView>
    </Screen>
  );
}
