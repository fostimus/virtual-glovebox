import React from "react";
import { AppView, AppText } from "base";
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
      <AppView style={tailwind("w-full bg-vgb-white rounded-md")}>
        <AppText bold style={tailwind("w-full text-xl ml-4 underline")}>
          {title}
        </AppText>
      </AppView>
      {items.map((item, index) => (
        <ExpandableCardItem
          title={item}
          borderBottom={index === items.length - 1}
        />
      ))}
    </AppView>
  );
}
