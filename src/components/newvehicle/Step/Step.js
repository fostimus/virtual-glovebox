import React, { useState, useContext } from "react";
import CircleSteps from "circlesteps";
import { AppView, AppText, AppTitle } from "base";
import { AppButton } from "base/buttons";
import Notification from "../Notification";
import tailwind from "tailwind";
import { useNavigation } from "@react-navigation/native";
import { store } from "store";

export default function Step({ title, step, question }) {
  return (
    <AppView style={tailwind("flex items-center h-4/6 justify-around")}>
      <CircleSteps filledIndex={step - 1} />
      <Action title={title} question={question} />
    </AppView>
  );
}

function Action({ title, question, nextPage }) {
  const { state, dispatch } = useContext(store);

  const navigation = useNavigation();

  const [haveRegistration, setHaveRegistration] = useState(false);

  function noftify() {
    // toggle and set timeout for registration notif
    setHaveRegistration(true);
    setTimeout(() => {
      setHaveRegistration(false);
    }, 2000);
  }

  return (
    <AppView style={tailwind("flex items-center justify-between h-1/2")}>
      {haveRegistration ? (
        <Notification />
      ) : (
        <>
          <AppText style={tailwind("text-xl w-60 text-center")}>{state.newVehicle.question}</AppText>
          <AppView>
            <AppButton
              small={state.newVehicle.btn1.small}
              text={state.newVehicle.btn1.text}
              action={() => {
                dispatch({ type: state.newVehicle.btn1.action });
                noftify();
              }}
              image={state.newVehicle.btn1.image}
              imageOptions={state.newVehicle.btn1.imageOptions}
            />
            <AppButton
              small={state.newVehicle.btn2.small}
              text={state.newVehicle.btn2.text}
              image={state.newVehicle.btn2.image}
              action={state.newVehicle.btn2.action}
              imageOptions={state.newVehicle.btn2.imageOptions}
            />
          </AppView>
        </>
      )}
    </AppView>
  );
}
