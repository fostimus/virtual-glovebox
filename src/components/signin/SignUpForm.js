import React, { useState } from "react";
import { AppView, AppText } from "base";
import { AppButton } from "base/buttons";
import { FlatList } from "react-native";
import SignInField from "./SignInField";
import { CheckBox } from "react-native-elements";
import { signUp } from "./authenticate";
import { validatePassword, validateEmail } from "./validation";
import tailwind from "tailwind";
import { useNavigation } from "@react-navigation/native";

export default function SignUpForm({ inputEmail }) {
  const navigation = useNavigation();

  const [email, setEmail] = useState(inputEmail ? inputEmail : "");
  const [password, setPassword] = useState("");

  const [validation, setValidation] = useState({
    email: false,
    password: false
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [name, setName] = useState("");
  const [isChecked, setChecked] = useState(false);

  const buttonDisabled =
    !validation.email || !validation.password || name === "" || !isChecked;

  const highlightedStyles = tailwind("text-blue-500");

  function validatePw() {
    const pwValidation = validatePassword(password);

    if (pwValidation.success) {
      setValidation({ email, password: true });
      setPasswordError("");
    } else {
      setValidation({ email, password: false });
      setPasswordError(pwValidation.error);
      console.log(pwValidation.error);
    }
  }

  function validateEm() {
    const emailValidation = validateEmail(email);

    if (emailValidation.success) {
      setValidation({ email: true, password });
      setEmailError("");
    } else {
      setValidation({ email: false, password });
      setEmailError(emailValidation.error);
      console.log(emailValidation.error);
    }
  }

  const checkBoxText = (
    <AppText bold style={tailwind("ml-4 text-gray-500")}>
      I agree to{" "}
      <AppText bold style={highlightedStyles}>
        Virtual Glovebox's Privacy Policy
      </AppText>{" "}
      and{" "}
      <AppText bold style={highlightedStyles}>
        Terms of Service
      </AppText>
    </AppText>
  );

  return (
    <AppView style={tailwind("flex items-center")}>
      <SignInField
        placeholder="Email"
        value={email}
        setValue={setEmail}
        validate={validateEm}
        error={emailError}
      />
      <SignInField placeholder="Name" value={name} setValue={setName} />
      <SignInField
        placeholder="Password"
        value={password}
        setValue={setPassword}
        validate={validatePw}
        error={passwordError}
      />
      <AppView style={tailwind("h-24 self-start ml-4")}>
        <AppText bold style={tailwind("text-gray-500")}>
          Password must contain:
        </AppText>
        <FlatList
          style={tailwind("")}
          scrollEnabled={false}
          data={[
            { key: "At least 6 characters" },
            { key: "A number" },
            { key: "A special character" }
          ]}
          renderItem={({ item }) => (
            <AppText
              bold
              style={tailwind("text-gray-500")}
            >{`\u2022 ${item.key}`}</AppText>
          )}
        />
      </AppView>

      <CheckBox
        title={checkBoxText}
        checked={isChecked}
        containerStyle={tailwind("bg-transparent border-transparent w-60")}
        onPress={() => setChecked(!isChecked)}
      />
      <AppButton
        disabled={buttonDisabled}
        large
        bold
        text="Create Account"
        action={() => validateAndSignUp(email, password)}
      />
    </AppView>
  );
}
