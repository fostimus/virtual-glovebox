import React from "react";
import { AppView } from "base";

export default function CircleStepsContainer({ steps }) {
  return (
    <AppView>
      {steps.map((step, index) => (
        <>
          <CircleStep step={step} />
          {index !== steps.length - 1 && (
            <div>line</div>
          ) /* TODO: need to draw a line here, except for last step. replace the div with the drawn line */}
        </>
      ))}
    </AppView>
  );
}
