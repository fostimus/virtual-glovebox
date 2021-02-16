import React, { useState } from "react";
import { AppView, AppText } from "base";
import { Stylesheet } from "react-native";
import AppCard from "../AppCard";
import ExpandableCardItem from "./ExpandableCardItem";
import tailwind from "tailwind";

export default function ExpandableCard({ title, items }) {
  return (
    <AppView
      style={tailwind(
        "flex items-center justify-center w-11/12 rounded-md my-2"
      )}
    >
      <AppView style={tailwind("w-full bg-vgb-white rounded-xl p-2")}>
        <AppText bold style={tailwind("w-full text-xl ml-4 underline")}>
          {title}
        </AppText>
      </AppView>
      <AppView
        style={tailwind(
          "w-full border-t-2 border-l-2 border-r-2 rounded-xl border-solid border-vgb-card-border bg-vgb-white"
        )}
      >
        {items.map((item, index) => (
          <ExpandableCardItem
            title={item}
            topBorder={index === 0}
            borderBottom={index === items.length - 1}
          />
        ))}
      </AppView>
    </AppView>
  );
}

// note: box shadow is unsupported by tailwind-rn library. need to add in those styles manually
/*
boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
}
*/
