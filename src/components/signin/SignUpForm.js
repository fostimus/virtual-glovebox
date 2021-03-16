import React, { useState } from "react";
import { AppView, AppText } from "base";
import { AppButton } from "base/buttons";
import { FlatList } from "react-native";
import SignInField from "./SignInField";
import { CheckBox } from "react-native-elements";
import { signUp } from "./authenticate";
import validate from "./validation";
import tailwind from "tailwind";
import { useNavigation } from "@react-navigation/native";

export default function SignUpForm({ inputEmail }) {
  const navigation = useNavigation();

  const [values, setValues] = useState({
    email: inputEmail ? inputEmail : "",
    password: "",
    name: ""
  });

  const [validation, setValidation] = useState({
    email: false,
    password: false
  });

  const [error, setError] = useState({
    email: "",
    password: ""
  });
  const [isChecked, setChecked] = useState(false);

  function validateField(field) {
    const validation = validate(field, values[field]);

    if (validation.success) {
      setValidation({ ...validation, [field]: true });
      setError({ ...error, [field]: "" });
    } else {
      setValidation({ ...validation, [field]: false });
      setError({ ...error, [field]: validation.error });
      console.log(validation.error);
    }
  }

  const checkBoxText = () => {
    const highlightedStyles = tailwind("text-blue-500");

    return (
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
  };

  return (
    <AppView style={tailwind("flex items-center")}>
      <SignInField
        placeholder="Email"
        value={values.email}
        setValue={text => setValues({ ...values, email: text })}
        validate={() => validateField("email")}
        error={error.email}
      />
      <SignInField
        placeholder="Name"
        value={values.name}
        setValue={text => setValues({ ...values, name: text })}
      />
      <SignInField
        placeholder="Password"
        value={values.password}
        setValue={text => setValues({ ...values, password: text })}
        validate={() => validateField("password")}
        error={error.password}
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
        title={checkBoxText()}
        checked={isChecked}
        containerStyle={tailwind("bg-transparent border-transparent w-60")}
        onPress={() => setChecked(!isChecked)}
      />
      <AppButton
        disabled={
          !validation.email ||
          !validation.password ||
          values.name === "" ||
          !isChecked
        }
        large
        bold
        text="Create Account"
        action={() =>
          signUp(values.email, values.password, () =>
            navigation.navigate("Home")
          )
        }
      />
    </AppView>
  );
}
