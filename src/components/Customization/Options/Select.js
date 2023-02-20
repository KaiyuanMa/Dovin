import React, { useEffect, useState } from "react";
import { apiGetStepOptions } from "../../../api/option";
import sqrImg from "../../../../public/img/1600x1600.png";

function Select(params) {
  const setCurrStepIndex = params.setCurrStepIndex;
  const currStepIndex = params.currStepIndex;
  const setSteps = params.setSteps;
  const steps = params.steps;
  const submitOrder = params.submitOrder;
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState({});
  const quoteId = params.quoteId;

  const fetchOptions = async (stepId) => {
    const response = await apiGetStepOptions(stepId);
    setOptions(response.data);
  };

  useEffect(() => {
    setSelectedOption(steps[currStepIndex].option);
    fetchOptions(steps[currStepIndex].step.id);
  }, [currStepIndex]);

  const saveOption = (option) => {
    const newSteps = steps;
    newSteps[currStepIndex].option = option;
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
        <h2 className="ff-body fw-light">{`${steps[currStepIndex].step.description}`}</h2>
        {currStepIndex === steps.length - 1 ? (
          quoteId ? (
            <button disabled={selectedOption == null} onClick={submitOrder}>
              Update
            </button>
          ) : (
            <button disabled={selectedOption == null} onClick={submitOrder}>
              Add to Cart
            </button>
          )
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
              className="option"
            >
              <input
                type="radio"
                value={option}
                checked={selectedOption && selectedOption.id === option.id}
                onChange={() => selectOption(option)}
                id={`${steps[currStepIndex].id}${option.id}-input`}
              />
              <label
                className="flex-all-center flex-direction-column"
                htmlFor={`${steps[currStepIndex].id}${option.id}-input`}
              >
                {option.name}
                <img src={option.imageUrl} />
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Select;
