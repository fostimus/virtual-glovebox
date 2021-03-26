// store.js
import React, { createContext, useReducer } from "react";
import camera from "./camera.png";

const initialState = {
  newVehicle: {
    step: 1,
    question: "Do you have your vehicle's registration card?",
    notification: false,
    btn1: {
      small: true,
      text: "Yes",
      image: null,
      imageOptions: null,
      action: "newVehicle notify",
    },
    btn2: {
      small: true,
      text: "No",
      image: null,
      imageOptions: null,
    },
  },
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "newVehicle notify":
        const newState = {
          newVehicle: {
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
            },
          },
        };
        return newState;
      default:
        throw new Error();
    }
  }, initialState);

  console.log(state);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
