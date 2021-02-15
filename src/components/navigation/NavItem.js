import React from "react";
import { TouchableWithoutFeedback, Image } from "react-native";
import { AppView, AppText } from "base";
import tailwind from "tailwind";

export default function NavItem({ icon, title }) {
  return (
    <TouchableWithoutFeedback>
      <AppView style={tailwind("flex flex-col justify-center items-center")}>
        <Image source={icon} />
        <AppText style={tailwind("text-vgb-secondary text-xs")}>
          {title}
        </AppText>
      </AppView>
    </TouchableWithoutFeedback>
  );
}
