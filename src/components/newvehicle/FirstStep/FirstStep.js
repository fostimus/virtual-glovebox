import React, { useState } from "react";
import CircleSteps from "circlesteps";
import { AppView, AppText, AppTitle } from "base";
import { AppButton } from "base/buttons";
import Notification from "../Notification";
import camera from "./camera.png";
import tailwind from "tailwind";
import { useNavigation } from "@react-navigation/native";

export default function FirstStep({ title }) {
  return (
    <AppView style={tailwind("flex items-center h-4/6 justify-around")}>
      <CircleSteps filledIndex={0} />
      <Action title={title} />
    </AppView>
  );
}

function Action({ title }) {
  const navigation = useNavigation();

  const [question, setQuestion] = useState(
    "Do you have your vehicle's registration card?"
  );

  const [btn1, setBtn1] = useState({
    small: true,
    text: "Yes",
    image: null,
    imageOptions: null,
    action: setNotif
  });

  const [btn2, setBtn2] = useState({
    small: true,
    text: "No",
    image: null,
    imageOptions: null,
    action: {}
  });

  const [haveRegistration, setHaveRegistration] = useState(false);

  function setNotif() {
    setQuestion("How do you want to input your registration info?");
    setBtn1({
      small: false,
      text: "Scan",
      image: camera,
      imageOptions: { imageLeft: true },
      action: () => {} // this triggers camera scan
    });
    setBtn2({
      small: false,
      text: "Input Manually",
      image: "",
      action: () => navigation.navigate("New Vehicle Form", { title: title })
    });

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
          <AppText style={tailwind("text-xl w-60 text-center")}>
            {question}
          </AppText>
          <AppView>
            <AppButton
              small={btn1.small}
              text={btn1.text}
              action={btn1.action}
              image={btn1.image}
              imageOptions={btn1.imageOptions}
            />
            <AppButton
              small={btn2.small}
              text={btn2.text}
              image={btn2.image}
              action={btn2.action}
              imageOptions={btn2.imageOptions}
            />
          </AppView>
        </>
      )}
    </AppView>
  );
}
