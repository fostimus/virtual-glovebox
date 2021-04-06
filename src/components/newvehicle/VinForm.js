import React, { useState, useContext } from "react";
import AppForm from "base/forms";
import { store } from "screens/newvehicle/store";
import { useNavigation } from "@react-navigation/native";

export default function VinForm({ setModal }) {
  const [vin, setVin] = useState("");

  const formRows = [];

  const firstRow = [
    {
      name: "Vehicle Identification Number (VIN)",
      type: "input",
      setValue: setVin,
    },
  ];

  formRows.push(firstRow);

  const { state, dispatch } = useContext(store);

  const navigation = useNavigation();

  return (
    <AppForm
      title="Insurance Info"
      rows={formRows}
      cancelAction={() => setModal(true)}
      acceptAction={() => {
        dispatch({ type: "complete" });
        navigation.push("Add New Vehicle");
      }}
    />
  );
}
