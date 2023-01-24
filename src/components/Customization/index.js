import Option from "./Options";
import "./styles.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetStepSet } from "../../api/stepSet";
import { useDispatch, useSelector } from "react-redux";
import { apiAddQuote } from "../../api/quote";
import { apiAddQuoteItem } from "../../api/quoteItem";

function index() {
  const dispatch = useDispatch();
  const { session } = useSelector((state) => state.session);
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
  const submitOrder = async () => {
    const quote = {
      costSum: 0,
      userId: session.id,
    };
    const response = await apiAddQuote(quote);
    for (let i = 0; i < steps.length; i++) {
      const quoteItem = {
        quoteId: response.data.id,
        stepId: steps[i].id,
        optionsId: steps[i].selectedOption.id,
      };
      await apiAddQuoteItem(quoteItem);
    }
  };
  return (
    <div>
      {customization ? (
        <div className="container-full-width ff-body">
          <div className="container-full-width flex-h-center border-bottom padding-block-700">
            <h1 className="ff-heading fw-light">{customization.name}</h1>
          </div>
          <div className="step-option-wrapper container">
            <div className="steps | padding-block-600">
              <ul
                role="list"
                className="step-list | flex-all-center flow-700 ff-heading fs-secondary-heading"
              >
                {customization.steps.map((step, index) => {
                  return (
                    <li key={step.id} onClick={() => setCurrStepIndex(index)}>
                      <h2 className="ff-body">{step.name}</h2>
                      <div>
                        {step.selectedOption ? step.selectedOption.name : ""}
                      </div>
                    </li>
                  );
                })}
                <button onClick={submitOrder}>Confirm</button>
              </ul>
            </div>
            <Option
              currStepIndex={currStepIndex}
              setCurrStepIndex={setCurrStepIndex}
              steps={steps}
              setSteps={setSteps}
            />
            {/* <button onClick={() => console.log(steps)}>Log Steps</button> */}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default index;
