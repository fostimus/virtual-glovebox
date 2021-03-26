import React, { useState } from "react";
import { AppView, AppText } from "base";
import { AppButton } from "base/buttons";
import SignInField from "./SignInField";
import tailwind from "tailwind";
import { logIn } from "./authenticate";
import validate from "./validation";
import { useNavigation } from "@react-navigation/native";

export default function LoginForm({ inputEmail }) {
  const navigation = useNavigation();

  const [values, setValues] = useState({
    email: inputEmail ? inputEmail : "",
    password: "",
  });
  const [validation, setValidation] = useState({
    email: inputEmail ? true : false,
    password: false,
  });
  const [error, setError] = useState({ email: "", password: "" });

  function validateField(field) {
    const regexValidation = validate(field, values[field]);

    if (regexValidation.success) {
      setValidation({ ...validation, [field]: true });
      setError({ ...error, [field]: "" });
    } else {
      setValidation({ ...validation, [field]: false });
      setError({ ...error, [field]: regexValidation.error });
      console.log(validation.error);
    }
  }

  console.log(validation);

  return (
    <AppView>
      <SignInField
        placeholder="Email"
        value={values.email}
        setValue={text => setValues({ ...values, email: text })}
        validate={() => validateField("email")}
        error={error.email}
      />
      <SignInField
        placeholder="Password"
        value={values.password}
        setValue={text => setValues({ ...values, password: text })}
        validate={() => validateField("password")}
        error={error.password}
      />
      {/* TODO: implement forgot password functionality */}
      <AppText bold style={tailwind("text-center text-gray-500")}>
        Forgot password?
      </AppText>

      <AppButton
        disabled={!validation.email || !validation.password}
        large
        bold
        text="Log In"
        action={() =>
          logIn(
            values.email,
            values.password,
            () => navigation.navigate("Home"),
            text => setError({ ...error, password: text })
          )
        }
      />
    </AppView>
  );
}
