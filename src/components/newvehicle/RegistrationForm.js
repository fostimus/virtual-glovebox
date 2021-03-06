import React, { useState, useContext } from "react";
import AppForm from "base/forms";
import { store } from "screens/newvehicle/store";
import { useNavigation } from "@react-navigation/native";

export default function RegistrationForm({ setModal }) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [vin, setVin] = useState("");
  const [registeredOwner, setRegisteredOwner] = useState("");
  const [regFromDate, setRegFromDate] = useState("");
  const [regToDate, setRegToDate] = useState("");

  const formRows = [];

  const firstRow = [
    {
      name: "Make",
      type: "dropdown",
      options: [
        { label: "Honda", value: "Honda" },
        { label: "Toyota", value: "Toyota" },
        { label: "Tesla", value: "Tesla" },
      ],
      setValue: setMake,
    },
    {
      name: "Model",
      type: "dropdown",
      options: [
        { label: "Civic", value: "Civic" },
        { label: "Accord", value: "Accord" },
      ],
      setValue: setModel,
    },
  ];

  const secondRow = [
    {
      name: "Year",
      type: "dropdown",
      small: true,
      options: [
        { label: "2010", value: "2010" },
        { label: "2011", value: "2011" },
        { label: "2012", value: "2012" },
      ],
      setValue: setYear,
    },
    {
      name: "License Plate",
      type: "input",
      large: true,
      setValue: setLicensePlate,
    },
  ];

  const thirdRow = [
    {
      name: "Vehicle Identification Number (VIN)",
      type: "input",
      setValue: setVin,
    },
  ];

  const fourthRow = [
    {
      name: "Registered Owner",
      type: "input",
      setValue: setRegisteredOwner,
    },
  ];

  const fifthRow = [
    { name: "Reg. Valid From", type: "date", setValue: setRegFromDate },
    { name: "Reg. Valid To", type: "date", setValue: setRegToDate },
  ];

  formRows.push(firstRow);
  formRows.push(secondRow);
  formRows.push(thirdRow);
  formRows.push(fourthRow);
  formRows.push(fifthRow);

  const { state, dispatch } = useContext(store);

  const navigation = useNavigation();

  // console.log(state);

  return (
    <AppForm
      title="Registration Info"
      rows={formRows}
      cancelAction={() => setModal(true)}
      acceptAction={() => {
        dispatch({ type: "formAccept" });
        navigation.push("Add New Vehicle");
      }}
    />
  );
}
