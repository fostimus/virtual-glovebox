import React, { useState } from "react";
import Screen from "../Screen";
import { AppTitle } from "base";
import AppForm from "base/forms";
import tailwind from "tailwind";

// extract form into component under base
export default function NewVehicleFormScreen({ route }) {
  const formRows = [];

  const firstRow = [
    {
      name: "Make",
      type: "dropdown",
      options: [
        { label: "Honda", value: "Honda" },
        { label: "Toyota", value: "Toyota" },
        { label: "Tesla", value: "Tesla" }
      ]
    },
    {
      name: "Model",
      type: "dropdown",
      options: [
        { label: "Civic", value: "Civic" },
        { label: "Accord", value: "Accord" }
      ]
    }
  ];

  const secondRow = [
    {
      name: "Year",
      type: "dropdown",
      small: true,
      options: [
        { label: "2010", value: "2010" },
        { label: "2011", value: "2011" },
        { label: "2012", value: "2012" }
      ]
    },
    {
      name: "License Plate",
      type: "input",
      large: true
    }
  ];

  const thirdRow = [
    {
      name: "Vehicle Identification Number (VIN)",
      type: "input"
    }
  ];

  const fourthRow = [
    {
      name: "Registered Owner",
      type: "input"
    }
  ];

  const fifthRow = [
    { name: "Reg. Valid From", type: "date" },
    { name: "Reg. Valid To", type: "date" }
  ];

  formRows.push(firstRow);
  formRows.push(secondRow);
  formRows.push(thirdRow);
  formRows.push(fourthRow);
  formRows.push(fifthRow);

  return (
    <Screen loggedIn>
      <AppTitle>{route.params.title}</AppTitle>
      <AppForm title="Registration Info" rows={formRows} />
    </Screen>
  );
}
