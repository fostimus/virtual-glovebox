import React, { useState } from "react";
import Screen from "../Screen";
import { AppTitle, AppView, AppText } from "base";
import { AppCard } from "base/cards";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity, Image, TextInput } from "react-native";
import tailwind from "tailwind";

// extract form into component under base
export default function NewVehicleFormScreen({ route }) {
  return (
    <Screen loggedIn>
      <AppTitle>{route.params.title}</AppTitle>
      <AppCard title="Registration Info" titleStyles={tailwind("self-center")}>
        <FormRow>
          <FormItem name="Make">
            <Dropdown
              options={[
                { label: "Honda", value: "Honda" },
                { label: "Toyota", value: "Toyota" },
                { label: "Tesla", value: "Tesla" }
              ]}
            />
          </FormItem>
          <FormItem name="Model">
            <Dropdown
              options={[
                { label: "Honda", value: "Honda" },
                { label: "Toyota", value: "Toyota" },
                { label: "Tesla", value: "Tesla" }
              ]}
            />
          </FormItem>
        </FormRow>
        <FormRow>
          <FormItem name="Year">
            <Dropdown
              small
              options={[
                { label: "2010", value: "2010" },
                { label: "2011", value: "2011" },
                { label: "2012", value: "2012" }
              ]}
            />
          </FormItem>
          <FormItem name="License Plate">
            <FormInput large />
          </FormItem>
        </FormRow>
        <FormRow>
          <FormItem single name="Vehicle Identification Number (VIN)">
            <FormInput full />
          </FormItem>
        </FormRow>
        <FormRow>
          <FormItem single name="Registered Owner">
            <FormInput full />
          </FormItem>
        </FormRow>
      </AppCard>
    </Screen>
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

function FormItem({ name, children, single }) {
  let style = "";
  if (single) style = "w-full";
  return (
    <AppView style={tailwind(style)}>
      <AppText>
        {name}: <AppText style={tailwind("text-red-500")}>*</AppText>
      </AppText>
      {children}
    </AppView>
  );
}

function Dropdown({ small, large, options }) {
  const [value, setValue] = useState("");

  let width = "w-36";
  if (small) width = "w-20";
  if (large) width = "w-52";

  return (
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
  );
}

function FormInput({ small, large, full }) {
  let width = "w-36";
  if (small) width = "w-20";
  if (large) width = "w-52";
  if (full) width = "w-full";

  return (
    <AppView style={tailwind("w-full")}>
      <TextInput
        style={tailwind(
          width +
            " my-1 bg-white h-10 border border-solid border-gray-400 rounded-lg"
        )}
      />
    </AppView>
  );
}
