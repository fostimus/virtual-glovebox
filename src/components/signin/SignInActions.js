import React, { useState } from "react";
import { TextInput, Image } from "react-native";
import { AppView, AppText, HorizontalLine } from "base";
import { AppButton } from "base/buttons";
import tailwind from "tailwind-rn";
import SignInButton from "./SignInButton";
import SignInField from "./SignInField";
import SignInThirdParty from "./SignInThirdParty";
import { useNavigation } from "@react-navigation/native";

import { userExists } from "./authenticate";

export default function SignInActions({ options }) {
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    Email: "",
    Password: ""
  });

  const navigation = useNavigation();

  const nextPage = async email => {
    if (await userExists(email)) {
      navigation.navigate("Log In Screen");
    } else {
      navigation.navigate("Sign Up Screen");
    }
  };

  return (
    <AppView style={tailwind("flex items-center w-4/6")}>
      <SignInField placeholder="Email" setValue={setEmail} />
      <AppButton
        text="Continue"
        large
        disabled={email === "" /* TODO: validate email */}
        action={() => nextPage(email)}
      />
      <SignInThirdParty options={options} />
    </AppView>
  );
}

/**
 * <SignInField
   key={placeholder}
   placeholder={placeholder}
   setFormData={setFormData}
 />
 */
