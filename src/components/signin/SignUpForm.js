import React, { useState } from "react";
import { AppView, AppText } from "base";
import { AppButton } from "base/buttons";
import { FlatList } from "react-native";
import SignInField from "./SignInField";
import tailwind from "tailwind";

export default function SignUpForm({ route }) {
  // note: ?. syntax is called "optional chaining". it allows you to check for field deep within an object, without having to worry about null/undefined along the way
  const [email, setEmail] = useState(
    route?.params?.email ? route.params.email : ""
  );
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <AppView style={tailwind("flex items-center")}>
      <SignInField placeholder="Email" value={email} setValue={setEmail} />
      <SignInField placeholder="Name" value={name} setValue={setName} />
      <SignInField
        placeholder="Password"
        value={password}
        setValue={setPassword}
      />
      <AppView style={tailwind("h-24 self-start")}>
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

      <AppButton large bold text="Create Account" />
    </AppView>
  );
}
