import React, { useEffect, useState } from "react";
import { apiGetStepOptions } from "../../api/option";
import sqrImg from "../../../public/img/1600x1600.png";

function Step(params) {
  const setCurrStepIndex = params.setCurrStepIndex;
  const currStepIndex = params.currStepIndex;
  const setSteps = params.setSteps;
  const steps = params.steps;
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

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
    console.log(steps);
    if (selectedOption) {
      const prevSelected = document.getElementById(
        `${steps[currStepIndex].id}${selectedOption.id}`
      );
      prevSelected.classList.remove("selected-option");
    }
    setSelectedOption(option);
    saveOption(option);
    const selectedOptionHtml = document.getElementById(
      `${steps[currStepIndex].id}${option.id}`
    );
    selectedOptionHtml.classList.add("selected-option");
  };
  return (
    <div className="option-wrapper | border-left">
      <div className="option-header | container flex-v-center padding-block-600">
        <h2 className="ff-body fw-light">{`${steps[currStepIndex].description}`}</h2>
        <button disabled={selectedOption == null} onClick={nextStep}>
          Next
        </button>
      </div>
      <ul role="list" className="option-list | padding-block-200">
        {options.map((option) => {
          return (
            <li
              key={option.id}
              id={`${steps[currStepIndex].id}${option.id}`}
              onClick={() => selectOption(option)}
              className={`option ${
                selectedOption && selectedOption.id == option.id
                  ? "selected-option "
                  : ""
              }| flex-all-center`}
            >
              {option.name}
              <img src={sqrImg} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Step;
