import React, { useState } from "react";
import Screen from "src/screens/Screen.js";
import { AppTitle, AppButton, AppView, AppText, AppCard } from "base";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Image, TextInput, StyleSheet, View, Button, Platform, Pressable, Text } from "react-native";
import tailwind from "tailwind";
import NavBar from "src/components/navigation/NavBar/NavBar.js"
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from "react-native-dropdown-picker";
// // extract form into component under base

export default function Maintenance({ style, title, rows, }) {
    const navigation = useNavigation()
    const [Vehicle, setVehicle] = useState("");
    const [Odometer, setOdometer] = useState("");
    const [vin, setVin] = useState("");
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };
    // //Rows to map over for the form
    const formRows = [];
    const firstRow = [
        {
            name: "Vehicle",
            type: "dropdown",
            options: [
                { label: "Honda", value: "Civic" },
                { label: "Toyota", value: "Tundra" },
                { label: "Tesla", value: "Tesla" }
            ],
            setValue: setVehicle
        },
    ];

    const secondRow = [
        {
            name: "Date",
            type: "input",
            small: true,
            setValue: setDate
        },
        {
            name: "Odometer",
            type: "input",
            medium: true,
            setValue: setOdometer
        }
    ];

    const thirdRow = [
        {
            name: "Vehicle Identification Number (VIN)",
            type: "input",
            setValue: setVin
        }
    ];
    formRows.push(firstRow);
    formRows.push(secondRow);
    formRows.push(thirdRow);
    return (
        <Screen>
            <AppTitle>Maintenance</AppTitle>
            <ServiceButton text="Add New Service" />
            <View style={{
                ...tailwind(
                    "flex items-center justify-center w-11/12 rounded-md bg-white"
                ),
                ...style
            }}>
                <AppTitle>Downtown Garage</AppTitle>
                <View>
                    <Button onPress={showDatepicker} title="Service Date" />
                    {show && (
                        <DateTimePicker
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>
                <View>
                    <FormRow>Vehicle</FormRow>
                    <TextInput>Odometer</TextInput>
                    <TextInput>Services Performed</TextInput>
                </View>
            </View>
            <NavBar></NavBar>
        </Screen>
    );
}

function FormRow({
    small,
    large,
    full,
    name,
    type,
    options,
    children,
    setValue
}) {
    let width = "w-36";
    if (small) width = "w-20";
    if (large) width = "w-52";
    if (full) width = "w-full";
    <AppView style={tailwind("w-full")}>
        <TextInput
            onChangeText={text => setValue(text)}
            style={tailwind(
                width +
                " my-1 bg-white h-10 border border-solid border-gray-400 rounded-lg"
            )}
        />
    </AppView>
    return (
        <AppView style={tailwind(width)}>
            <TextInput>
                <AppText>
                    {name}: <AppText style={tailwind("text-red-500")}>*</AppText>
                </AppText>
                {children}
            </TextInput>
        </AppView>
    );
}




function ServiceButton({
    text,
    image,
    imageOptions,
    style,
    action,
    small,
    large,
    bold
}) {
    let width = "w-44";
    if (small) width = "w-28";
    if (large) width = "w-60";
    const styles = {
        ...tailwind(
            "flex flex-row container justify-evenly items-center " +
            width +
            " p-3 rounded-md my-4 rounded-lg bg-vgb-primary "
        ),
        ...style
    };

    if (small && large) {
        // can't do this
    }

    if (!imageOptions) {
        imageOptions = {};
    }

    let textStyles = tailwind("text-lg");
    if (styles["color"]) textStyles = { ...textStyles, color: styles["color"] };

    return (
        <TouchableOpacity style={styles} onPress={action}>
            {imageOptions.imageLeft && <Image source={image} />}
            <AppText bold={bold} style={textStyles}>
                {text}
            </AppText>
            {imageOptions.imageRight && (
                <Image source={image} style={imageOptions.style} />
            )}
        </TouchableOpacity>
    );
}