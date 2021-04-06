import React, { useState, useContext } from "react";
import AppForm from "base/forms";
import { store } from "screens/newvehicle/store";
import { useNavigation } from "@react-navigation/native";

//Note: not gathering vehicle make, model, or year for now. Data was already captured from registration
export default function InsuranceForm({ setModal }) {
  const [provider, setProvider] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");

  const [vin, setVin] = useState("");

  const [effectiveDate, setEffectiveDate] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  const formRows = [];

  const firstRow = [
    {
      name: "Insurance Provider",
      type: "input",
      setValue: setProvider,
    },
  ];

  const secondRow = [
    {
      name: "Policy Number",
      type: "input",
      setValue: setPolicyNumber,
    },
  ];

  const thirdRow = [
    { name: "Effective Date", type: "date", setValue: setEffectiveDate },
    { name: "Expiration Date", type: "date", setValue: setExpirationDate },
  ];

  const fourthRow = [
    {
      name: "Vehicle Identification Number",
      type: "input",
      setValue: setVin,
    },
  ];

  formRows.push(firstRow);
  formRows.push(secondRow);
  formRows.push(thirdRow);
  formRows.push(fourthRow);

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
