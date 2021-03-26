// store.js
import React, { createContext, useReducer } from "react";

const initialState = {
  newVehicle: {
    step: 1,
    question: "Do you have your vehicle's registration card?",
  },
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "action description":
        const newState = {
          newVehicle: {
            step: 2,
            question: "Huzzah!",
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
