import React, { useState } from "react";
import Screen from "screens/Screen";
import { AppTitle, Modal } from "base";
import { VinForm } from "components/newvehicle";
import { title } from "./store";

export default function NewVinFormScreen() {
  const [modal, setModal] = useState(false);

  return (
    <Screen loggedIn>
      {modal ? <Modal pageTitle="Registration" setModal={setModal} /> : <></>}
      <AppTitle>{title}</AppTitle>
      <VinForm setModal={setModal} />
    </Screen>
  );
}
