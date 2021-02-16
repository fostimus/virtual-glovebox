import React from "react";
import { AppCard } from "base/cards";
import { AppButton, SecondaryButton } from "base/buttons";
import { useNavigation } from "@react-navigation/native";
import addCar from "./addCar.png";
import addDL from "./addDL.png";
import mapTrifold from "./MapTrifold.png";

export default function DashboardCardContainer() {
  const navigation = useNavigation();

  const options = [
    {
      title: "Add Vehicle",
      image: addCar,
      action: () => {
        navigation.navigate("Add New Vehicle");
      }
    },
    { title: "Add Driver's License", image: addDL },
    { title: "Take a Tour", image: mapTrifold }
  ];

  return (
    <AppCard title="Get Started:">
      {options.map(option => (
        <SecondaryButton
          large
          key={option.title}
          text={option.title}
          image={option.image}
          imageOptions={{ imageRight: true }}
          action={option.action}
        />
      ))}
    </AppCard>
  );
}
