import React, { useState } from "react";
import CircleSteps from "circlesteps";
import { AppView, AppText, AppTitle } from "base";
import { AppButton } from "base/buttons";
import Notification from "../Notification";
import camera from "./camera.png";
import tailwind from "tailwind";

export default function FirstStep() {
  return (
    <AppView style={tailwind("flex items-center h-4/6 justify-around")}>
      <CircleSteps filledIndex={0} />
      <Action />
    </AppView>
  );
}

function Action() {
  const [question, setQuestion] = useState(
    "Do you have your vehicle's registration card?"
  );
  const [btn1, setBtn1] = useState({
    small: true,
    text: "Yes",
    image: null,
    imageOptions: null
  });
  const [btn2, setBtn2] = useState({
    small: true,
    text: "No",
    image: null,
    imageOptions: null
  });
  const [haveRegistration, setHaveRegistration] = useState(false);

  const setNotif = () => {
    setQuestion("How do you want to input your registration info?");
    setBtn1({
      small: false,
      text: "Scan",
      image: camera,
      imageOptions: { imageLeft: true, style: tailwind("w-8 h-8") }
    });
    setBtn2({
      small: false,
      text: "Input Manually",
      image: ""
    });

    // toggle and set timeout for registration notif
    setHaveRegistration(true);
    setTimeout(() => {
      setHaveRegistration(false);
    }, 4000);
  };
  return (
    <AppView style={tailwind("flex items-center justify-between h-1/2")}>
      {haveRegistration ? (
        <Notification />
      ) : (
        <>
          <AppText style={tailwind("text-xl w-60 text-center")}>
            {question}
          </AppText>
          <AppView>
            <AppButton
              small={btn1.small}
              text={btn1.text}
              action={setNotif}
              image={btn1.image}
              imageOptions={btn1.imageOptions}
            />
            <AppButton
              small={btn2.small}
              text={btn2.text}
              image={btn2.image}
              imageOptions={btn2.imageOptions}
            />
          </AppView>
        </>
      )}
    </AppView>
  );
}
