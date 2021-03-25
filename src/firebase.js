import { API_KEY } from "react-native-dotenv";

require("firebase/auth");
// Required for side-effects
require("firebase/firestore");

console.log("testing: ", API_KEY);

const firebase = require("firebase");
firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: process.env["authDomain"],
  projectId: "virtual-glovebox"
});
const db = firebase.firestore();
// creates a document with key:values
db.collection("registration info")
  .doc("cars")
  .set({
    vehicle: {
      vin: 987654321,
      LP: "4321",
      Insurance: 123456789,
      address: "mixed",
      maintenance: [{ mechanic: "details" }, { parts: "namesOfParts" }, {}]
    }
  })
  .then(() => {
    console.log("**Firebase document successfully written!");
    console.log("testing: ", API_KEY);
  })
  .catch(error => {
    console.log("Error writing document: ", error);
  });

export { firebase };
