import React, { createContext, useReducer, useMemo, useCallback } from "react";
import camera from "./camera.png";

// entire flow's title
const title = "Add New Vehicle";

const initialState = {
  step: 1,
  question: "Do you have your vehicle's registration card?",
  notification: true,
  btn1: {
    small: true,
    text: "Yes",
    action: { dispatch: "notify" },
  },
  btn2: {
    small: true,
    text: "No",
    action: {
      dispatch: "noRegistration",
    },
  },
};

const store = createContext(initialState);
const { Provider } = store;

function newVehicleReducer(state, action) {
  switch (action.type) {
    case "notify":
      return {
        step: 1,
        question: "How do you want to input your registration info?",
        notification: false,
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
        tagline: "Almost done!",
        btn1: {
          small: false,
          text: "Add Now",
          image: null,
          action: { dispatch: "takeInsurance", nextPage: null },
        },
        btn2: {
          small: false,
          text: "Skip",
          action: "",
        },
        footerBtn: {
          text: "← previous",
          action: {
            dispatch: action.type,
          },
        },
      };
    case "takeInsurance":
      return {
        step: 3,
        question: "How do you want to input your insurance info?",
        notification: false,
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
            nextPage: "New Insurance Form",
          },
        },
      };
    case "complete":
      return {
        step: 3,
        question: "Yay you're done!",
        complete: true,
        btn1: {
          small: false,
          text: "Go to Dashboard",
          image: null,
          imageOptions: null,
          action: {
            nextPage: "Home",
          },
        },
        footerBtn: null,
      };
    case "noRegistration":
      return {
        step: 1,
        question:
          "No problem! All we need is your Vehicle Identification Number (VIN) and License Plate Number",
        btn1: {
          large: true,
          bold: true,
          text: "How do I find my VIN?",
          action: {
            dispatch: "",
          },
        },
        btn2: {
          large: true,
          bold: true,
          text: "I'm ready to input my VIN.",
          action: {
            dispatch: "enterVin",
          },
        },
        footerBtn: {
          text: "Skip this step for now",
          action: {
            dispatch: "addInsurance",
          },
        },
      };
    case "enterVin":
      return {
        step: 1,
        question: "How do you want to input your Vehicle Identification Number (VIN)?",
        btn1: {
          bold: true,
          text: "Scan",
          image: camera,
          imageOptions: { imageLeft: true },
        },
        btn2: {
          bold: true,
          text: "Input Manually",
          action: {
            nextPage: "New VIN Form",
          },
        },
        footerBtn: {
          text: "Skip this step for now",
          action: {
            dispatch: "addInsurance",
          },
        },
      };
    default:
      throw new Error();
  }
}

function initializeState(state = initialState) {
  return state;
}

const NewVehicleStateProvider = ({ children }) => {
  const memoizedReducer = useCallback(newVehicleReducer, []);
  const [state, dispatch] = useReducer(memoizedReducer, initialState, initializeState);

  console.log(state);

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
