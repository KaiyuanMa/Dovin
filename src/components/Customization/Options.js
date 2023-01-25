import React, { useEffect, useState } from "react";
import { apiGetStepOptions } from "../../api/option";
import sqrImg from "../../../public/img/1600x1600.png";

function Step(params) {
  const setCurrStepIndex = params.setCurrStepIndex;
  const currStepIndex = params.currStepIndex;
  const setSteps = params.setSteps;
  const steps = params.steps;
  const submitOrder = params.submitOrder;
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState({});

  useEffect(() => {
    setSelectedOption(steps[currStepIndex].selectedOption);
    const fetchOptions = async (stepId) => {
      const response = await apiGetStepOptions(stepId);
      setOptions(response.data);
    };
    fetchOptions(steps[currStepIndex].id);
  }, [currStepIndex]);

  const saveOption = (option) => {
    const newSteps = steps;
    newSteps[currStepIndex].selectedOption = option;
    setSteps(newSteps);
  };
  const nextStep = () => {
    saveOption(selectedOption);
    setSelectedOption(null);
    setCurrStepIndex(currStepIndex + 1);
  };
  const selectOption = (option) => {
    setSelectedOption(option);
    saveOption(option);
  };
  return (
    <div className="option-wrapper | border-left">
      <div className="option-header | container flex-v-center padding-block-600">
        <h2 className="ff-body fw-light">{`${steps[currStepIndex].description}`}</h2>
        {currStepIndex === steps.length - 1 ? (
          <button disabled={selectedOption == null} onClick={submitOrder}>
            Submit
          </button>
        ) : (
          <button disabled={selectedOption == null} onClick={nextStep}>
            Next
          </button>
        )}
      </div>
      <ul role="list" className="option-list | padding-block-200">
        {options.map((option) => {
          return (
            <li
              key={option.id}
              id={`${steps[currStepIndex].id}${option.id}`}
              className="option | flex-all-center"
            >
              <input
                type="radio"
                value={option}
                checked={selectedOption && selectedOption.id === option.id}
                onChange={() => selectOption(option)}
                id={`${steps[currStepIndex].id}${option.id}-input`}
              />
              <label for={`${steps[currStepIndex].id}${option.id}-input`}>
                {option.name}
                <img src={sqrImg} />
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Step;
