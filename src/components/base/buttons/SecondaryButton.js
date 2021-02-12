import AppButton from "./AppButton";
import { tailwind } from "tailwind";

import React from "react";

export default function SecondaryButton({
  text,
  image,
  style,
  action,
  small,
  large
}) {
  return (
    <AppButton
      style={tailwind("bg-vgb-purple")}
      text={text}
      image={image}
      action={action}
      small={small}
      large={large}
    />
  );
}
