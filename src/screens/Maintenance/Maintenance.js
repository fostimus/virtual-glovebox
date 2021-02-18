import React, { useState } from "react";
import Screen from "src/screens/Screen.js";
import { AppTitle, AppButton, AppView, AppText } from "base";
import { useNavigation } from "@react-navigation/native";
import { AppCard } from "base/cards";
import { TouchableOpacity, Image, TextInput, StyleSheet } from "react-native";
import tailwind from "tailwind";
import NavBar from "src/components/navigation/NavBar/NavBar.js"
import { AddService } from "src/screens/AddService/AddService.js"

// // extract form into component under base

export default function Maintenance() {
    const navigation = useNavigation()
    const [btn1, setBtn1] = useState({
        large: true,
        text: "Add New Service",
        image: null,
        imageOptions: null,
    });
    const [Vehicle, setVehicle] = useState("");
    const [Date, setDate] = useState("");
    const [Odometer, setOdometer] = useState("");
    const [vin, setVin] = useState("");


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
            <AppCard>
            </AppCard>
            <NavBar></NavBar>
        </Screen>
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