import React, { useState } from "react";
import Screen from "./Screen";
import { AppTitle } from "base";
import { AppCard } from "base/cards";
import { Picker } from "@react-native-picker/picker";

// extract form into component under base
export default function NewVehicleFormScreen({ route }) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("Civic");

  return (
    <Screen>
      <AppTitle>{route.params.title}</AppTitle>
      <AppCard title="Registration Info">
        <Picker
          selectedValue={make}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }
        >
          <Picker.Item label="Honda" value="honda" />
          <Picker.Item label="Toyota" value="toyota" />
        </Picker>
      </AppCard>
    </Screen>
  );
}
