import React, { useState } from "react";
import { AppText, AppView } from "base";
import { Image, TextInput, TouchableOpacity } from "react-native";
import Screen from "../Screen";
import stockDL from "./stockDL.png";
import edit from "./edit.png";
import tailwind from "tailwind";

export default function QuickId() {
  const [editName, setEditName] = useState(false);
  const [idName, setIdName] = useState("ID Name");

  const titleStyles = tailwind(
    "flex flex-row justify-evenly items-center my-4 text-3xl"
  );
  const title = editName ? (
    <TextInput
      placeholder={idName === "ID Name" ? idName : null}
      placeholderTextColor={tailwind("text-gray-400")}
      onChangeText={text => setIdName(text)}
      style={{
        ...titleStyles,
        ...tailwind(
          "bg-white w-48 text-center border border-solid border-gray-400"
        )
      }}
    >
      {idName === "ID Name" ? null : idName}
    </TextInput>
  ) : (
    <AppText style={titleStyles}>{idName}</AppText>
  );

  return (
    <Screen loggedIn>
      {title}
      <TouchableOpacity
        style={tailwind("absolute right-8 top-6")}
        onPress={() => {
          setEditName(!editName);
        }}
      >
        <Image source={edit} />
      </TouchableOpacity>
      <Image source={stockDL} />
    </Screen>
  );
}
