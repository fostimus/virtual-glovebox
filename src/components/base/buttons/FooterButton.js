import AppButton from "./AppButton";
import tailwind from "tailwind";

import React from "react";

export default function FooterButton({ text, imageOptions, image, action, small, large, bold }) {
  return (
    <AppButton
      style={tailwind("bg-transparent")}
      textStyles={tailwind("text-gray-700 underline text-sm text-center")}
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
