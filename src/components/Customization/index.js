import Option from "./Options";
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
        <div className="container-full-width ff-body">
          <div className="container-full-width flex-v-center border-bottom ">
            <div>Name: {customization.name}</div>
            <div>Description: {customization.description}</div>
          </div>
          <div className="step-option-wrapper container">
            <div className="steps | border-right">
              Steps:
              <ul
                role="list"
                className="step-list | flex-all-center flow-700 ff-heading fs-secondary-heading"
              >
                {customization.steps.map((step, index) => {
                  return (
                    <li key={step.id} onClick={() => setCurrStepIndex(index)}>
                      <h2 className="fw-light">{step.name}</h2>
                      <div>
                        {step.selectedOption ? step.selectedOption.name : ""}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Option
              currStepIndex={currStepIndex}
              setCurrStepIndex={setCurrStepIndex}
              steps={steps}
              setSteps={setSteps}
            />
            <button onClick={() => console.log(steps)}>Log Steps</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default index;
