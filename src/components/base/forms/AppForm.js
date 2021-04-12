import React, { useState } from "react";
import { AppView, AppText } from "base";
import { AppButton, CancelButton } from "base/buttons";
import { AppCard } from "base/cards";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity, Image, TextInput } from "react-native";
import tailwind from "tailwind";

export default function AppForm({ title, rows, cancelAction, acceptAction }) {
  /*
   * rows: [[{name: "Make" type: "dropdown", options: []},{}],[],[{name: "Vehicle Identification Number (VIN)"}]]
   */

  return (
    <AppCard title={title}>
      {rows.map((row, i) => (
        <FormRow key={i}>
          {row.map((item, i) => (
            <FormItem
              key={i}
              name={item.name}
              small={item.small}
              large={item.large}
              full={row.length === 1}
              type={item.type}
              options={item.options}
              setValue={item.setValue}
            />
          ))}
        </FormRow>
      ))}

      <AppView style={tailwind("flex flex-row w-full justify-evenly border-t border-solid border-gray-400")}>
        <CancelButton small bold text="Cancel" action={cancelAction} />
        <AppButton small bold text="Accept" action={acceptAction} />
      </AppView>
    </AppCard>
  );
}

function FormRow({ children }) {
  return (
    <AppView style={tailwind("w-full flex flex-row justify-between pb-2 pl-4 pr-4")}>{children}</AppView>
  );
}

//TODO: split off child and input type checking to own helper function. include "date" as an input type
function FormItem({ small, large, full, name, type, options, children, setValue }) {
  let width = "w-36";
  if (small) width = "w-20";
  if (large) width = "w-52";
  if (full) width = "w-full";

  const child =
    type === "dropdown" ? (
      <DropDownPicker
        defaultValue={null}
        placeholder=""
        containerStyle={tailwind(width + " h-10 my-1 -z-10")}
        style={tailwind("bg-white border-gray-400 rounded-lg -z-10")}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={tailwind("absolute bg-blue-800")}
        items={options}
        onChangeItem={item => setValue(item.value)}
      />
    ) : (
      <AppView style={tailwind("w-full -z-10")}>
        <TextInput
          onChangeText={text => setValue(text)}
          style={tailwind(width + " my-1 bg-white h-10 border border-solid border-gray-400 rounded-lg -z-10")}
        />
      </AppView>
    );

  return (
    <AppView style={tailwind(width)}>
      <AppText>
        {name}: <AppText style={tailwind("text-red-500")}>*</AppText>
      </AppText>
      {child}
    </AppView>
  );
}
