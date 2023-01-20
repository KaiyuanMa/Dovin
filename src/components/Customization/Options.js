import React, { useEffect, useState } from "react";
import { apiGetStepOptions } from "../../api/option";
import sqrImg from "../../../public/img/1600x1600.png";

function Step(params) {
  const setCurrStepIndex = params.setCurrStepIndex;
  const currStepIndex = params.currStepIndex;
  const setSteps = params.setSteps;
  const steps = params.steps;
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    const fetchOptions = async (stepId) => {
      const response = await apiGetStepOptions(stepId);
      console.log(response.data);
      setOptions(response.data);
    };
    fetchOptions(steps[currStepIndex].id);
  }, [currStepIndex]);

  const saveOption = () => {
    const newSteps = steps;
    newSteps[currStepIndex].selectedOption = selectedOption;
    setSteps(newSteps);
  };
  const nextStep = () => {
    saveOption();
    setSelectedOption(null);
    setCurrStepIndex(currStepIndex + 1);
  };
  console.log(selectedOption);
  return (
    <div className="option-wrapper">
      <div>{`Step ${steps[currStepIndex].name}`}</div>
      <ul role="list" className="option-list container">
        {options.map((option) => {
          return (
            <li
              key={option.id}
              onClick={() => setSelectedOption(option)}
              className="option | flex-all-center"
            >
              {option.name}
              <img src={sqrImg} />
            </li>
          );
        })}
      </ul>
      <button disabled={selectedOption == null} onClick={nextStep}>
        Next
      </button>
    </div>
  );
}

export default Step;
