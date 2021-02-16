import React, { useState } from "react";
import { AppView, AppText } from "base";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import closeX from "./close.png";
import tailwind from "tailwind";

export default function ExpandableCardItem({ title, borderBottom, topBorder }) {
  const [expanded, setExpanded] = useState(false);

  const baseBorderStyles = " border-solid border-vgb-card-border";

  let borderStyles = baseBorderStyles;

  if (!topBorder)
    borderStyles =
      borderStyles + " border-t-2 rounded-t-xl border-r-2 border-l-2";
  if (topBorder) borderStyles = borderStyles + " rounded-t-xl";
  if (borderBottom) borderStyles = borderStyles + " rounded-b-xl";

  return (
    <TouchableWithoutFeedback
      style={tailwind("w-full relative")}
      onPress={() => setExpanded(!expanded)}
    >
      <View style={tailwind(borderStyles + " w-full bg-vgb-white p-2")}>
        <AppText style={tailwind("text-xl ml-6")}>{title}</AppText>
        {expanded && (
          <>
            <TouchableOpacity
              style={tailwind("absolute right-4 top-4")}
              onPress={() => setExpanded(!expanded)}
            >
              <Image source={closeX} />
            </TouchableOpacity>
            <View>
              <AppText>Lorem Ipsum</AppText>
              <AppText>Lorem Flipsum</AppText>
              <AppText>Lorem Yipsum</AppText>
              <AppText>Full {title}</AppText>
            </View>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
