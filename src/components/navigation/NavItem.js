import React from "react";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  View
} from "react-native";
import { AppText } from "base";
import { useNavigation } from "@react-navigation/native";
import tailwind from "tailwind";

export default function NavItem({ icon, title }) {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(title)}>
      <View style={tailwind("flex flex-col justify-center items-center")}>
        <Image source={icon} />
        <AppText style={tailwind("text-vgb-secondary text-xs")}>
          {title}
        </AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}
