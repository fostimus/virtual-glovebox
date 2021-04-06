import React, { useState } from "react";
import Screen from "screens/Screen";
import { AppTitle, Modal } from "base";
import { LicensePlateForm } from "components/newvehicle";
import { title } from "./store";

export default function NewLicensePlateFormScreen() {
  const [modal, setModal] = useState(false);

  return (
    <Screen loggedIn>
      {modal ? <Modal pageTitle="Registration" setModal={setModal} /> : <></>}
      <AppTitle>{title}</AppTitle>
      <LicensePlateForm setModal={setModal} />
    </Screen>
  );
}
