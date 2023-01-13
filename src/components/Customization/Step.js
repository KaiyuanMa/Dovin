import React, { useEffect, useState } from "react";
import { apiGetStepOptions } from "../../api/option";

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
    <div>
      <div>{`Step ${steps[currStepIndex].name}`}</div>
      {options.map((option) => {
        return (
          <li key={option.id} onClick={() => setSelectedOption(option.id)}>
            {option.name}
          </li>
        );
      })}
      <button disabled={selectedOption == null} onClick={nextStep}>
        Next
      </button>
    </div>
  );
}

export default Step;
