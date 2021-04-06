import React, { useState } from "react";
import Screen from "screens/Screen";
import { AppTitle, Modal } from "base";
import { InsuranceForm } from "components/newvehicle";
import { title } from "./store";

export default function NewInsuranceFormScreen() {
  const [modal, setModal] = useState(false);

  return (
    <Screen loggedIn>
      {modal ? <Modal pageTitle="Registration" setModal={setModal} /> : <></>}
      <AppTitle>{title}</AppTitle>
      <InsuranceForm setModal={setModal} />
    </Screen>
  );
}
