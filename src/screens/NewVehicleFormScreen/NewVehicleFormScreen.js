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
          <FormItem name="Model">
            <Dropdown
              large
              options={[
                { label: "Honda", value: "Honda" },
                { label: "Toyota", value: "Toyota" },
                { label: "Tesla", value: "Tesla" }
              ]}
            />
          </FormItem>
        </FormRow>
        <FormRow>
          <FormItem name="License Plate">
            <FormInput></FormInput>
          </FormItem>
        </FormRow>
      </AppCard>
    </Screen>
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
      dropDownStyle={{ backgroundColor: "#fafafa" }}
      items={options}
      onChangeItem={item => setValue(item.value)}
    />
  );
}

function FormItem({ name, children }) {
  return (
    <AppView>
      <AppText>
        {name}: <AppText style={tailwind("text-red-500")}>*</AppText>
      </AppText>
      {children}
    </AppView>
  );
}

function FormInput({ name }) {
  return (
    <TextInput
      style={tailwind(
        "w-36 bg-white h-10 border border-solid border-gray-400 rounded-lg"
      )}
    ></TextInput>
  );
}

function FormRow({ children }) {
  return (
    <AppView style={tailwind("w-full flex flex-row justify-evenly")}>
      {children}
    </AppView>
  );
}
