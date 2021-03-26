import React from "react";
import { AppText, AppView } from "base";
import { AppButton } from "base/buttons";
import tailwind from "tailwind";
import { useNavigation } from "@react-navigation/native";

function Modal({ pageTitle, setModal }) {
  const navigation = useNavigation();

  return (
    // backdrop
    <AppView
      style={tailwind("absolute bg-black bg-opacity-50 z-20 w-full h-full flex justify-center items-center")}
    >
      {/* Modal */}
      <AppView
        style={tailwind("bg-gray-300 w-80 h-96 p-12 flex flex-col justify-evenly items-center rounded-lg")}
      >
        <AppText style={tailwind("text-center text-lg leading-6")}>
          Are you sure you want to exit the vehicle registration?
        </AppText>
        <AppText style={tailwind("text-center text-lg leading-6")}>
          Your registration info will not be saved.
        </AppText>
        {/* Button */}
        <AppView>
          <AppButton text={`Stay on ${pageTitle}`} action={() => setModal(false)} large />
          <AppButton
            large
            style={tailwind("bg-transparent ")}
            textStyles={tailwind("text-md underline text-blue-600")}
            text="Exit and go to the dashboard"
            action={() => navigation.navigate("Home")}
          />
        </AppView>
      </AppView>
    </AppView>
  );
}

export default Modal;
