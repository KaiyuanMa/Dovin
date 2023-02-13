import React, { useState } from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

function Appointment() {
  const [prefill, setPrefill] = useState({});
  useCalendlyEventListener({
    onEventScheduled: (e) => console.log(e.data.payload),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
  });
  return (
    <div className="padding-block-700 user-control-sub-page">
      <h2 className="ff-heading fw-light padding-block-800 fs-primary-heading">
        Appointment
      </h2>
      <InlineWidget url="https://calendly.com/kaiyuanma/just-some-chitchat" />
    </div>
  );
}

export default Appointment;
