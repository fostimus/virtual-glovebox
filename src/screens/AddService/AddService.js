import React, { useState } from "react";
import { AppView, AppText, AppTitle } from "base";
import { AppButton } from "base/buttons";
import tailwind from "tailwind";
import { useNavigation } from "@react-navigation/native";

export default function AddService({ title }) {
    return (
        <AppView>
            <Action title={title} />
        </AppView>
    )
}
function Action({ title }) {
    const navigation = useNavigation();

    const [question, setQuestion] = useState(
        "Do you have your vehicle's registration card?"
    );

    const [btn1, setBtn1] = useState({
        small: true,
        text: "Yes",
        image: null,
        imageOptions: null,
        action: setNotif
    });

    const [btn2, setBtn2] = useState({
        small: true,
        text: "No",
        image: null,
        imageOptions: null,
        action: {}
    });
    function setNotif() {
        setQuestion("How do you want to input your service info?");
        setBtn1({
            small: false,
            text: "Scan",
            image: camera,
            imageOptions: { imageLeft: true },
            action: () => { } // this triggers camera scan
        });
        setBtn2({
            small: false,
            text: "Input Manually",
            image: "",
            action: () => navigation.navigate("Add Service", { title: title })
        });
    }

    return (
        <>
            <AppText style={tailwind("text-xl w-60 text-center")}>
            </AppText>
            <AppView>
                <AppButton
                    small={btn1.small}
                    text={btn1.text}
                    action={btn1.action}
                    image={btn1.image}
                    imageOptions={btn1.imageOptions}
                />
                <AppButton
                    small={btn2.small}
                    text={btn2.text}
                    image={btn2.image}
                    action={btn2.action}
                    imageOptions={btn2.imageOptions}
                />
            </AppView>
        </>
    )
};