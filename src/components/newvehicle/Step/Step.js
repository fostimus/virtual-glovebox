import React, { useState, useContext } from "react";
import CircleSteps from "circlesteps";
import { AppView, AppText, AppTitle } from "base";
import { AppButton } from "base/buttons";
import Notification from "../Notification";
import tailwind from "tailwind";
import { store } from "screens/newvehicle/store";

export default function Step() {
  const { state } = useContext(store);

  return (
    <AppView style={tailwind("flex items-center h-4/6 justify-around")}>
      <CircleSteps filledIndex={state.step} />
      <Action />
    </AppView>
  );
}

function Action() {
  const { state, dispatch } = useContext(store);

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
          <AppText style={tailwind("text-xl w-60 text-center")}>{state.question}</AppText>
          <AppView>
            <AppButton
              small={state.btn1.small}
              text={state.btn1.text}
              action={() => {
                if (state.btn1.action.dispatch) {
                  dispatch({ type: state.btn1.action.next });
                } else {
                  state.btn1.action.next();
                }
                noftify();
              }}
              image={state.btn1.image}
              imageOptions={state.btn1.imageOptions}
            />
            <AppButton
              small={state.btn2.small}
              text={state.btn2.text}
              image={state.btn2.image}
              action={() => {
                if (state.btn2.action.dispatch) {
                  dispatch({ type: state.btn2.action.next });
                } else {
                  state.btn2.action.next();
                }
              }}
              imageOptions={state.btn2.imageOptions}
            />
          </AppView>
        </>
      )}
    </AppView>
  );
}
