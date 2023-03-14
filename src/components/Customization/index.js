import Options from "./Options";
import "./styles.css";
import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiGetStepSet } from "../../api/stepSet";
import { useDispatch, useSelector } from "react-redux";
import { apiAddQuote, apiGetQuote } from "../../api/quote";
import { apiAddQuoteItem } from "../../api/quoteItem";
import { apiAddGuestQuote, apiGetAGuestQuote } from "../../api/guestQuote";
import { v4 as uuidv4 } from "uuid";
import { apiAddGuestQI } from "../../api/guestQuoteItem";
import {
  setUserCartAC,
  setLocalCartAC,
  deleteCartItemAC,
} from "../../state/actionCreators/cartAC";
import { fadeInCustomPageStarter } from "../../animation";
import gsap from "gsap";

function index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { session } = useSelector((state) => state.session);
  const [customization, setCustomization] = useState();
  const [steps, setSteps] = useState([]);
  const [currStepIndex, setCurrStepIndex] = useState(0);
  const { customizationId } = useParams();
  const { quoteId } = useParams();
  const main = useRef();

  const fetchCustomization = async () => {
    const response = await apiGetStepSet(customizationId);
    setCustomization(response.data);
    const _steps = [];
    for (let step of response.data.steps) {
      let _step = {};
      _step.step = step;
      _steps.push(_step);
    }
    setSteps(_steps);
  };

  const fetchQuote = async () => {
    let quote;
    if (session.id) {
      quote = await apiGetQuote(quoteId);
    } else {
      quote = await apiGetAGuestQuote(localStorage.getItem("guestId"), quoteId);
    }
    console.log(quote);
    const set = await apiGetStepSet(quote.data[0].stepSetId);
    setCustomization(set.data);
    console.log(quote.data[0].quoteItems);
    setSteps(quote.data[0].quoteItems);
  };

  useEffect(() => {
    if (quoteId) {
      fetchQuote(quoteId);
    } else {
      fetchCustomization();
    }
  }, []);

  useLayoutEffect(() => {
    let ctx;
    if (customization) {
      ctx = gsap.context(() => {
        console.log(1);
        fadeInCustomPageStarter(
          ".customization-header",
          ".step-option-wrapper"
        );
      }, main);
    }
    return () => {
      if (customization) ctx.revert();
    };
  }, [customization]);

  const submitOrder = async () => {
    let userId = session.id;
    if (!userId) {
      if (localStorage.getItem("guestId")) {
        userId = localStorage.getItem("guestId");
      } else if (!localStorage.getItem("guestId")) {
        userId = uuidv4();
        localStorage.setItem("guestId", userId);
      }
    }
    const quote = {
      costSum: 0,
      userId: userId,
      isCart: true,
      stepSetId: customization.id,
    };
    let currQuoteId;
    if (session.id) {
      const response = await apiAddQuote(quote);
      currQuoteId = response.data.id;
    } else {
      quote.guestId = quote.userId;
      delete quote.userId;
      const response = await apiAddGuestQuote(userId, quote);
      currQuoteId = response.data.id;
    }

    for (let step of steps) {
      const type = step.step.type;
      let quoteItem;
      if (type === "select") {
        quoteItem = {
          quoteId: currQuoteId,
          stepId: step.step.id,
          optionId: step.option.id,
        };
      } else if (type === "measurement") {
        quoteItem = {
          quoteId: currQuoteId,
          stepId: step.step.id,
          measurements: step.measurements,
        };
      }
      if (session.id) {
        await apiAddQuoteItem(quoteItem);
      } else {
        quoteItem.guestId = quoteItem.userId;
        delete quoteItem.userId;
        await apiAddGuestQI(userId, quoteItem);
      }
    }
    if (session.id) {
      if (quoteId) {
        dispatch(deleteCartItemAC(quoteId)).then(() => {
          dispatch(setUserCartAC());
        });
      } else {
        dispatch(setUserCartAC());
      }
    } else {
      if (quoteId) {
        dispatch(deleteCartItemAC(quoteId, userId)).then(() => {
          dispatch(setLocalCartAC(userId));
        });
      } else {
        dispatch(setLocalCartAC(userId));
      }
    }
    navigate("/Cart");
  };

  return (
    <div className="customization-page | bg-neutral-200" ref={main}>
      {customization ? (
        <div className="container-full-width ff-body">
          <div className="container-full-width flex-h-center border-bottom padding-block-400">
            <h1 className="customization-header | ff-heading fw-light">
              {customization.name}
            </h1>
          </div>
          <div className="step-option-wrapper | container">
            <div className="steps | padding-block-600">
              <ul
                role="list"
                className="step-list | flex-all-center border-between"
              >
                <h2 className="ff-heading fw-light">Steps</h2>
                {steps.map((step, index) => {
                  return (
                    <>
                      <input
                        type="radio"
                        value={index}
                        checked={index === currStepIndex}
                        onChange={() => setCurrStepIndex(index)}
                        id={`${customizationId}_${step.step.id}`}
                        key={`${customizationId}_${step.step.id}`}
                      />
                      <label
                        className="padding-block-300"
                        htmlFor={`${customizationId}_${step.step.id}`}
                      >
                        <h2>{step.step.name}</h2>
                        <p>
                          {step.option
                            ? step.option.name
                            : step.measurements
                            ? step.measurements
                            : null}
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
              quoteId={quoteId}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default index;
