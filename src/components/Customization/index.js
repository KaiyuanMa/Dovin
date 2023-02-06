import Options from "./Options";
import "./styles.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetStepSet } from "../../api/stepSet";
import { useDispatch, useSelector } from "react-redux";
import { apiAddQuote } from "../../api/quote";
import { apiAddQuoteItem } from "../../api/quoteItem";
import { apiAddGuestQuote } from "../../api/guestQuote";
import { v4 as uuidv4 } from "uuid";
import { apiAddGuestQI } from "../../api/guestQuoteItem";

function index() {
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
    let userId = session.id;
    if (!session.id) {
      if (localStorage.getItem("guestId")) {
        userId = localStorage.getItem("guestId");
      } else if (!localStorage.getItem("guestId")) {
        userId = uuidv4();
        localStorage.setItem("guestId", userId);
      }
    }
    console.log(userId);
    const quote = {
      costSum: 0,
      userId: userId,
      isCart: true,
      stepSetId: customizationId,
    };
    let quoteId;
    if (session.id) {
      const response = await apiAddQuote(quote);
      quoteId = response.data.id;
    } else {
      quote.guestId = quote.userId;
      delete quote.userId;
      const response = await apiAddGuestQuote(userId, quote);
      quoteId = response.data.id;
    }

    for (let step of steps) {
      const type = step.type;
      let quoteItem;
      if (type === "select") {
        quoteItem = {
          quoteId: quoteId,
          stepId: step.id,
          optionId: step.selectedOption.id,
        };
      } else if (type === "measurement") {
        quoteItem = {
          quoteId: quoteId,
          stepId: step.id,
          measurements: step.measurement,
        };
      }
      if (session.id) await apiAddQuoteItem(quoteItem);
      else {
        quoteItem.guestId = quoteItem.userId;
        delete quoteItem.userId;
        await apiAddGuestQI(userId, quoteItem);
      }
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
                        htmlFor={`${customizationId}_${step.id}`}
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
