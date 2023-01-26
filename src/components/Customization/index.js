import Options from "./Options";
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
    <div className="customization-page | bg-neutral-200">
      {customization ? (
        <div className="container-full-width ff-body">
          <div className="container-full-width flex-h-center border-bottom padding-block-700">
            <h1 className="ff-heading fw-light">{customization.name}</h1>
          </div>
          <div className="step-option-wrapper container">
            <div className="steps | padding-block-600">
              <ul
                role="list"
                className="step-list | flex-all-center border-between"
              >
                <h2 className="ff-heading fw-light fs-secondary-heading">
                  Steps
                </h2>
                {customization.steps.map((step, index) => {
                  return (
                    <>
                      <input
                        type="radio"
                        value={index}
                        checked={index === currStepIndex}
                        onChange={() => setCurrStepIndex(index)}
                        id={`${customizationId}_${step.id}`}
                        key={`${customizationId}_${step.id}`}
                      />
                      <label
                        className="padding-block-300"
                        for={`${customizationId}_${step.id}`}
                      >
                        <h2>{step.name}</h2>
                        <p>
                          {step.selectedOption ? step.selectedOption.name : ""}
                        </p>
                      </label>
                    </>
                  );
                })}
              </ul>
            </div>
            <Options
              currStepIndex={currStepIndex}
              setCurrStepIndex={setCurrStepIndex}
              steps={steps}
              setSteps={setSteps}
              submitOrder={submitOrder}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default index;
