import React from "react";
import { AppText, AppView } from "base";
import tailwind from "tailwind";

function Modal() {
  return (
    <AppView
      style={tailwind(
        "absolute bg-black bg-opacity-30 z-20 w-full h-full flex justify-center items-center"
      )}
    >
      <AppView
        style={tailwind("bg-white w-80 h-96 p-12 flex flex-col justify-evenly")}
      >
        <AppText>
          Are you sure you want to exit the vehicle registration?
        </AppText>
        <AppText>Your registration info will not be saved.</AppText>
      </AppView>
    </AppView>
  );
}

export default Modal;
