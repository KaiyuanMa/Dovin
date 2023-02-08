import React, { useEffect, useState } from "react";
import { apiGetStepOptions } from "../../../api/option";
import sqrImg from "../../../../public/img/1600x1600.png";

function Measurement(params) {
  const setCurrStepIndex = params.setCurrStepIndex;
  const currStepIndex = params.currStepIndex;
  const setSteps = params.setSteps;
  const steps = params.steps;
  const submitOrder = params.submitOrder;
  const quoteId = params.quoteId;
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState({});
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  const fetchOptions = async (stepId) => {
    const response = await apiGetStepOptions(stepId);
    setOptions(response.data);
  };

  useEffect(() => {
    setSelectedOption(steps[currStepIndex].option);
    fetchOptions(steps[currStepIndex].step.id);
    if (steps[currStepIndex].measurements) {
      let _height = steps[currStepIndex].measurements.split(" | ")[0];
      setHeight(_height.split(":")[1]);
      let _width = steps[currStepIndex].measurements.split(" | ")[1];
      setWidth(_width.split(":")[1]);
    }
  }, [currStepIndex]);

  const saveOption = (option) => {
    const type = steps[currStepIndex].step.type;
    if (type === "measurement") {
      steps[currStepIndex].measurements = `height:${height} | width:${width}`;
    } else if (type === "select") {
      steps[currStepIndex].option = option;
    }
    setSteps(steps);
  };
  const nextStep = () => {
    saveOption(selectedOption);
    setSelectedOption(null);
    setCurrStepIndex(currStepIndex + 1);
  };
  const handelSubmit = () => {
    saveOption();
    submitOrder();
  };

  return (
    <div className="option-wrapper | border-left">
      <div className="option-header | container flex-v-center padding-block-600">
        <h2 className="ff-body fw-light">{`${steps[currStepIndex].step.description}`}</h2>
        {currStepIndex === steps.length - 1 ? (
          quoteId ? (
            <button disabled={!height || !width} onClick={handelSubmit}>
              Update
            </button>
          ) : (
            <button disabled={!height || !width} onClick={handelSubmit}>
              Add to Cart
            </button>
          )
        ) : (
          <button disabled={!height || !width} onClick={nextStep}>
            Next
          </button>
        )}
      </div>
      <div className="measurement-form | container flex-direction-column">
        <div className="flex-v-center">
          <label>Height</label>
          <input value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
        <div className="flex-v-center">
          <label>Width</label>
          <input value={width} onChange={(e) => setWidth(e.target.value)} />
        </div>
      </div>
    </div>
  );
}

export default Measurement;
