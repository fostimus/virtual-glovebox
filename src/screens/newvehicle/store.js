import React, { createContext, useReducer } from "react";
import camera from "./camera.png";
import { useNavigation } from "@react-navigation/native";

// entire flow's title
const title = "Add New Vehicle";

const initialState = {
  step: 1,
  question: "Do you have your vehicle's registration card?",
  notification: false,
  btn1: {
    small: true,
    text: "Yes",
    image: null,
    imageOptions: null,
    action: { dispatch: true, next: "notify" },
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

const StateProvider = ({ children }) => {
  const navigation = useNavigation();

  const [state, dispatch] = useReducer((state, action) => {
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
              dispatch: false,
              next: () => navigation.navigate("New Vehicle Form", { title: "Registration Info" }),
            },
          },
        };
      case "formAccept":
        return {
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
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { title, store, StateProvider };
