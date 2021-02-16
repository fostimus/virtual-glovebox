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
  large
}) {
  return (
    <AppButton
      style={tailwind("bg-vgb-secondary text-vgb-tertiary")}
      text={text}
      imageOptions={imageOptions}
      image={image}
      action={action}
      small={small}
      large={large}
    />
  );
}
