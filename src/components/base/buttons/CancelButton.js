import AppButton from "./AppButton";
import tailwind from "tailwind";

import React from "react";

export default function SecondaryButton({
  text,
  imageOptions,
  image,
  style,
  action,
  small,
  large,
  bold,
  disabled
}) {
  return (
    <AppButton
      style={tailwind(
        "border-2 border-solid bg-transparent border-vgb-primary text-vgb-primary"
      )}
      text={text}
      imageOptions={imageOptions}
      image={image}
      action={action}
      small={small}
      large={large}
      bold={bold}
    />
  );
}
