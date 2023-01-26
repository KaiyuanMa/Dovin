import React from "react";
import Measurement from "./Measurement";
import Select from "./Select";

function index(params) {
  const currStepIndex = params.currStepIndex;
  const setCurrStepIndex = params.setCurrStepIndex;
  const steps = params.steps;
  const type = params.steps[params.currStepIndex].type;
  const setSteps = params.setSteps;
  const submitOrder = params.submitOrder;
  switch (type) {
    case "select":
      return <Select {...params} />;
    case "measurement":
      return <Measurement {...params} />;
  }
}

export default index;
