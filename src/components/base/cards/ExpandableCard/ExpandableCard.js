import React from "react";
import { AppView } from "base";
import AppCard from "../AppCard";
import ExpandableCardItem from "./ExpandableCardItem";
import tailwind from "tailwind";

export default function ExpandableCard({ title, items }) {
  return (
    <AppCard title={title} titleStyles={tailwind("w-full")}>
      {items.map(item => (
        <ExpandableCardItem title={item} />
      ))}
    </AppCard>
  );
}
