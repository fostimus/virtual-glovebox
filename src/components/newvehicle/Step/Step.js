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

//
/* btn = {
  small: true,
  text: "Yes",
  image: null,
  imageOptions: null,
  action: setNotif,
}
*/
function Action({ title, question, nextPage }) {
  const { state, dispatch } = useContext(store);

  const navigation = useNavigation();

  const [btn1, setBtn1] = useState({
    small: true,
    text: "Yes",
    image: null,
    imageOptions: null,
    action: setNotif,
  });

  const [btn2, setBtn2] = useState({
    small: true,
    text: "No",
    image: null,
    imageOptions: null,
    action: {},
  });

  const [haveRegistration, setHaveRegistration] = useState(false);

  function setNotif() {
    setQuestion("How do you want to input your registration info?");
    setBtn1({
      small: false,
      text: "Scan",
      // image: camera,
      imageOptions: { imageLeft: true },
      action: () => {}, // this triggers camera scan
    });
    setBtn2({
      small: false,
      text: "Input Manually",
      image: "",
      action: () => navigation.navigate(nextPage, { title: title }),
    });

    // toggle and set timeout for registration notif
    setHaveRegistration(true);
    setTimeout(() => {
      setHaveRegistration(false);
    }, 2000);
  }

  console.log(state, dispatch);

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
              action={() => dispatch({ type: state.newVehicle.btn1.action })}
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
