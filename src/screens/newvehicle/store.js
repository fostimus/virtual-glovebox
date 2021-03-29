import React, { createContext, useReducer, useMemo, useCallback } from "react";
import camera from "./camera.png";

// entire flow's title
const title = "Add New Vehicle";

let initialState = {
  step: 1,
  question: "Do you have your vehicle's registration card?",
  notification: false,
  btn1: {
    small: true,
    text: "Yes",
    image: null,
    imageOptions: null,
    action: { dispatch: "notify", nextPage: null },
  },
  btn2: {
    small: true,
    text: "No",
    image: null,
    imageOptions: null,
  },
};

const store = createContext(initialState);
const { Provider } = store;

function newVehicleReducer(state, action) {
  console.log(action);

  switch (action.type) {
    case "notify":
      return {
        step: 1,
        question: "How do you want to input your registration info?",
        notification: true,
        btn1: {
          small: false,
          text: "Scan",
          image: camera,
          imageOptions: { imageLeft: true },
        },
        btn2: {
          small: false,
          text: "Input Manually",
          image: "",
          action: {
            dispatch: null,
            nextPage: "New Vehicle Form",
          },
        },
      };
    case "formAccept":
      initialState = {
        step: 2,
        question: "Do you want to add a nickname for your vehicle?",
        notification: false,
        btn1: {
          small: false,
          text: "Add",
          image: null,
          imageOptions: null,
        },
        btn2: {
          small: false,
          text: "Skip",
          image: null,
          action: "",
        },
      };
      console.log(initialState);
      return initialState;
    default:
      throw new Error();
  }
}

const StateProvider = ({ children }) => {
  const memoizedReducer = useCallback(newVehicleReducer, []);
  const [state, dispatch] = useReducer(memoizedReducer, initialState);

  // console.log("state in provider:", state);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );

  // console.log("value is:", value);

  return <Provider value={value}>{children}</Provider>;
};

export { title, store, StateProvider };
