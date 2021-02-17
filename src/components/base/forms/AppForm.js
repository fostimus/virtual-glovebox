import React, { useState } from "react";
import { AppView, AppText } from "base";
import { AppButton, CancelButton } from "base/buttons";
import { AppCard } from "base/cards";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity, Image, TextInput } from "react-native";
import tailwind from "tailwind";

export default function AppForm({ title, rows }) {
  /*
   * rows: [[{name: "Make" type: "dropdown", options: []},{}],[],[{name: "Vehicle Identification Number (VIN)"}]]
   */

  return (
    <AppCard title={title}>
      {rows.map(row => (
        <FormRow>
          {row.map(item => (
            <FormItem
              name={item.name}
              small={item.small}
              large={item.large}
              full={row.length === 1}
              type={item.type}
              options={item.options}
            />
          ))}
        </FormRow>
      ))}

      <AppView
        style={tailwind(
          "flex flex-row w-full justify-evenly border-t border-solid border-gray-400"
        )}
      >
        <CancelButton small bold text="Cancel" />
        <AppButton small bold text="Accept" />
      </AppView>
    </AppCard>
  );
}

function FormRow({ children }) {
  return (
    <AppView
      style={tailwind("w-full flex flex-row justify-between pb-2 pl-4 pr-4")}
    >
      {children}
    </AppView>
  );
}

function FormItem({ small, large, full, name, type, options, children }) {
  const [value, setValue] = useState("");

  let width = "w-36";
  if (small) width = "w-20";
  if (large) width = "w-52";
  if (full) width = "w-full";

  const child =
    type === "dropdown" ? (
      <DropDownPicker
        defaultValue={null}
        placeholder=""
        containerStyle={tailwind(width + " h-10 my-1")}
        style={tailwind("bg-white border-gray-400 rounded-lg")}
        itemStyle={{
          justifyContent: "flex-start"
        }}
        dropDownStyle={tailwind("absolute z-50 bg-blue-500")}
        items={options}
        onChangeItem={item => setValue(item.value)}
      />
    ) : (
      <AppView style={tailwind("w-full")}>
        <TextInput
          style={tailwind(
            width +
              " my-1 bg-white h-10 border border-solid border-gray-400 rounded-lg"
          )}
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
