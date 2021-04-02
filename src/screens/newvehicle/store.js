import React, { createContext, useReducer, useMemo, useCallback } from "react";
import camera from "./camera.png";

// entire flow's title
const title = "Add New Vehicle";

const initialState = {
  step: 1,
  question: "Do you have your vehicle's registration card?",
  notification: false,
  input: null,
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
        input: null,
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
      return {
        step: 2,
        question: "Do you want to add a nickname for your vehicle?",
        notification: false,
        input: "Vehicle Nickname",
        btn1: {
          small: false,
          text: "Add",
          image: null,
          imageOptions: null,
          action: { dispatch: "addInsurance", nextPage: null },
        },
        btn2: {
          small: false,
          text: "Skip",
          image: null,
          action: "",
        },
      };
    case "addInsurance":
      return {
        step: 3,
        question: "Do you want to add your vehicle's insurance info now?",
        notification: false,
        input: null,
        btn1: {
          small: false,
          text: "Add Now",
          image: null,
          imageOptions: null,
          action: { dispatch: "takeInsurance", nextPage: null },
        },
        btn2: {
          small: false,
          text: "Skip",
          image: null,
          action: "",
        },
      };
    default:
      throw new Error();
  }
}

const NewVehicleStateProvider = ({ children }) => {
  const memoizedReducer = useCallback(newVehicleReducer, []);
  const [state, dispatch] = useReducer(memoizedReducer, initialState);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );

  return <Provider value={value}>{children}</Provider>;
};

export { title, store, NewVehicleStateProvider };
