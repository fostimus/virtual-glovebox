import React, { useState } from "react";
import { AppView } from "base";
import { AppButton } from "base/buttons";
import tailwind from "tailwind-rn";
import SignInField from "./SignInField";
import SignInThirdParty from "./SignInThirdParty";
import { useNavigation } from "@react-navigation/native";
import validate from "./validation";

import { userExists } from "./authenticate";

export default function SignInActions({ options }) {
  const [email, setEmail] = useState("");
  const [validation, setValidation] = useState(false);
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const nextPage = async email => {
    if (await userExists(email)) {
      navigation.navigate("Log In Screen", { email: email });
    } else {
      navigation.navigate("Sign Up Screen", { email: email });
    }
  };

  function validateEmail() {
    const validation = validate("email", email);

    if (validation.success) {
      setValidation(true);
      setError("");
    } else {
      setValidation(false);
      setError(validation.error);
      console.log(validation.error);
    }
  }

  return (
    <AppView style={tailwind("flex items-center w-4/6")}>
      <SignInField
        placeholder="Email"
        setValue={setEmail}
        validate={validateEmail}
        error={error}
      />
      <AppButton
        text="Continue"
        large
        disabled={!validation}
        action={() => nextPage(email)}
      />
      <SignInThirdParty options={options} />
    </AppView>
  );
}
