import React, { useState } from "react";
import Screen from "screens/Screen";
import { AppTitle, Modal } from "base";
import { RegistrationForm } from "components/newvehicle";
import { title, StateProvider } from "../store";

export default function NewVehicleFormScreen() {
  const [modal, setModal] = useState(false);

  return (
    <StateProvider>
      <Screen loggedIn>
        {modal ? <Modal pageTitle="Registration" setModal={setModal} /> : <></>}
        <AppTitle>{title}</AppTitle>
        <RegistrationForm setModal={setModal} />
      </Screen>
    </StateProvider>
  );
}
