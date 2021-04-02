import React, { useState, useContext } from "react";
import CircleSteps from "circlesteps";
import { AppView, AppText, AppTitle } from "base";
import { AppButton } from "base/buttons";
import { TextInput } from "react-native";
import Notification from "../Notification";
import tailwind from "tailwind";
import { store } from "screens/newvehicle/store";
import { useNavigation } from "@react-navigation/native";

export default function Step({ state }) {
  const curState = state ? state : useContext(store).state;

  return (
    <AppView style={tailwind("flex items-center h-4/6 justify-around my-6")}>
      <CircleSteps filledIndex={curState.step} />
      <Action curState={curState} />
    </AppView>
  );
}

function Action({ curState }) {
  const navigation = useNavigation();

  const { dispatch } = useContext(store);
  const state = curState;

  const [haveRegistration, setHaveRegistration] = useState(false);

  function noftify() {
    // toggle and set timeout for registration notif
    setHaveRegistration(true);
    setTimeout(() => {
      setHaveRegistration(false);
    }, 2000);
  }

  const w = "w-72";

  return (
    <AppView style={tailwind("flex items-center justify-around h-1/2 flex-auto mt-10")}>
      {haveRegistration ? (
        <Notification />
      ) : (
        <>
          <AppText style={tailwind(`text-xl text-center ${w}`)}>{state.question}</AppText>
          {state?.input && (
            <AppView style={tailwind(`${w}`)}>
              <AppText bold>{state?.input}</AppText>
              <TextInput style={tailwind("bg-white h-8 border border-gray-400 rounded-md mt-1")}></TextInput>
            </AppView>
          )}
          <AppView>
            <AppButton
              small={state.btn1.small}
              text={state.btn1.text}
              action={() => {
                if (state.btn1.action.dispatch) {
                  dispatch({ type: state.btn1.action.dispatch });
                }

                if (state.btn1.action.nextPage) {
                  navigation.navigate(state.btn1.action.nextPage);
                }

                if (state.notification) {
                  noftify();
                }
              }}
              image={state.btn1.image}
              imageOptions={state.btn1.imageOptions}
            />
            {state.btn2 && (
              <AppButton
                small={state.btn2.small}
                text={state.btn2.text}
                image={state.btn2.image}
                action={() => {
                  if (state.btn2.action.dispatch) {
                    dispatch({ type: state.btn2.action.dispatch });
                  }

                  if (state.btn2.action.nextPage) {
                    navigation.navigate(state.btn2.action.nextPage);
                  }
                }}
                imageOptions={state.btn2.imageOptions}
              />
            )}
          </AppView>
        </>
      )}
    </AppView>
  );
}
