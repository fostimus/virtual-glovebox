import React from "react";
import { AppView, AppText } from "base";
import { TouchableWithoutFeedback, View } from "react-native";
import tailwind from "tailwind";

export default function ExpandableCardItem({ title, borderBottom, topBorder }) {
  const baseBorderStyles = " border-solid border-vgb-card-border";

  let borderStyles = baseBorderStyles;

  if (!topBorder)
    borderStyles =
      borderStyles + " border-t-2 rounded-t-xl border-r-2 border-l-2";
  if (topBorder) borderStyles = borderStyles + " rounded-t-xl";
  if (borderBottom) borderStyles = borderStyles + " rounded-b-xl";

  return (
    <TouchableWithoutFeedback
      style={tailwind("w-full")}
      onPress={() => console.log("yeeeeeha")}
    >
      <View style={tailwind(borderStyles + " w-full bg-vgb-white p-2")}>
        <AppText style={tailwind("text-xl ml-6")}>{title}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}
