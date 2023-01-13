import Step from "./Step";
import "./styles.css";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetStepSet } from "../../api/stepSet";

function index() {
  const [customization, setCustomization] = useState();
  const [steps, setSteps] = useState([]);
  const [currStepIndex, setCurrStepIndex] = useState(0);
  const { customizationId } = useParams();
  useEffect(() => {
    const fetchCustomization = async () => {
      const response = await apiGetStepSet(customizationId);
      setCustomization(response.data);
      setSteps(response.data.steps);
    };
    fetchCustomization();
  }, []);
  return (
    <div>
      {customization ? (
        <div>
          <div>Name: {customization.name}</div>
          <div>Description: {customization.description}</div>
          <div>
            Steps:
            {customization.steps.map((step, index) => {
              return (
                <div key={step.id} onClick={() => setCurrStepIndex(index)}>
                  <li>{step.name}</li>
                  <div>
                    {step.selectedOption ? step.selectedOption.name : ""}
                  </div>
                </div>
              );
            })}
          </div>
          <Step
            currStepIndex={currStepIndex}
            setCurrStepIndex={setCurrStepIndex}
            steps={steps}
            setSteps={setSteps}
          />
          <button onClick={() => console.log(steps)}>Log Steps</button>
        </div>
      ) : null}
    </div>
  );
}

export default index;
