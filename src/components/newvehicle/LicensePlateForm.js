import React, { useState, useContext } from "react";
import AppForm from "base/forms";
import { store } from "screens/newvehicle/store";
import { useNavigation } from "@react-navigation/native";

export default function LicensePlateForm({ setModal }) {
  const [licensePlate, setLicensePlate] = useState("");

  const formRows = [];

  const firstRow = [
    {
      name: "License Plate Number",
      type: "input",
      setValue: setLicensePlate,
    },
  ];

  formRows.push(firstRow);

  const { state, dispatch } = useContext(store);

  const navigation = useNavigation();

  return (
    <AppForm
      title="Registration Info"
      rows={formRows}
      cancelAction={() => setModal(true)}
      acceptAction={() => {
        dispatch({ type: "complete" });
        navigation.push("Add New Vehicle");
      }}
    />
  );
}
