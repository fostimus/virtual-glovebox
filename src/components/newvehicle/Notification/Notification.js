import React from "react";
import { AppView, AppText } from "base";
import { Image } from "react-native";
import camera from "./camera.png";
import newspaper from "./newspaper.png";
import tailwind from "tailwind";

export default function Notification() {
  return (
    <AppView
      style={tailwind(
        "bg-vgb-notif w-72 h-72 flex items-center justify-evenly rounded-lg"
      )}
    >
      <AppText style={tailwind("text-center")}>
        We can scan your registration info automatically!
      </AppText>
      <AppView style={tailwind("flex flex-row w-full justify-center")}>
        <Image style={tailwind("mx-4")} source={camera} />
        <Image style={tailwind("mx-4")} source={newspaper} />
      </AppView>
      <AppText style={tailwind("text-center")}>
        All we need is a clear, well lit image.
      </AppText>
    </AppView>
  );
}
