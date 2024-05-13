/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ActionIcon6 } from "../../icons/ActionIcon6";
import { DownArrow } from "../../icons/DownArrow";
import { DownArrow1 } from "../../icons/DownArrow1";
import { DownArrow2 } from "../../icons/DownArrow2";
import { DownArrow3 } from "../../icons/DownArrow3";
import { DownArrow4 } from "../../icons/DownArrow4";
import { DownArrow5 } from "../../icons/DownArrow5";
import "./style.css";

export const InputField = ({
  wordLimit = true,
  additionalInfo = false,
  mandatoryField = false,
  helperText = false,
  leftIcon = false,
  inputType,
  device,
  state,
  labelClassName,
  text = "Dropdown Label",
  text1 = "Select",
  icon = <ActionIcon6 className="down-arrow" />,
}) => {
  return (
    <div className={`input-field ${inputType}`}>
      <div className="label-wrapper">
        <div className={`label ${state} input-type-0-${inputType} ${labelClassName}`}>
          {["area-text", "text-box"].includes(inputType) && <>Text box Label</>}

          {inputType === "dropdown" && <>{text}</>}

          {inputType === "phone-number" && <>Phone Number</>}
        </div>
      </div>
      <div className={`div-4 state-${state} input-type-1-${inputType}`}>
        {["dropdown", "text-box"].includes(inputType) && (
          <>
            <div className="content">
              <div className="enter-value">
                {((inputType === "text-box" && state === "disabled") ||
                  (inputType === "text-box" && state === "empty") ||
                  (inputType === "text-box" && state === "error") ||
                  (inputType === "text-box" && state === "hovered")) && <>Enter Value</>}

                {inputType === "text-box" && ["filled", "focused-active"].includes(state) && <>Filled Textbox</>}

                {((inputType === "dropdown" && state === "disabled") ||
                  (inputType === "dropdown" && state === "empty") ||
                  (inputType === "dropdown" && state === "error") ||
                  (inputType === "dropdown" && state === "hovered")) && <>{text1}</>}

                {inputType === "dropdown" && ["filled", "focused-active"].includes(state) && <>Value 1</>}
              </div>
            </div>
            {icon}
          </>
        )}

        {inputType === "phone-number" && (
          <>
            <div className="content-2">
              <div className="frame-2">
                <img
                  className="img"
                  alt="Frame"
                  src={
                    state === "empty"
                      ? "https://c.animaapp.com/UUPXAe3j/img/frame-1.svg"
                      : state === "filled"
                      ? "https://c.animaapp.com/UUPXAe3j/img/frame-1-2.svg"
                      : state === "focused-active"
                      ? "https://c.animaapp.com/UUPXAe3j/img/frame-1-3.svg"
                      : state === "error"
                      ? "https://c.animaapp.com/UUPXAe3j/img/frame-1-4.svg"
                      : state === "hovered"
                      ? "https://c.animaapp.com/UUPXAe3j/img/frame-1-1.svg"
                      : "https://c.animaapp.com/UUPXAe3j/img/frame-1-5.svg"
                  }
                />
                {state === "empty" && <DownArrow className="down-arrow" />}

                {state === "hovered" && <DownArrow1 className="down-arrow" />}

                {state === "filled" && <DownArrow2 className="down-arrow" />}

                {state === "focused-active" && <DownArrow3 className="down-arrow" />}

                {state === "disabled" && <DownArrow5 className="down-arrow" />}

                {state === "error" && <DownArrow4 className="down-arrow" />}
              </div>
              <img className="line" alt="Line" src="https://c.animaapp.com/UUPXAe3j/img/line-1-5.svg" />
            </div>
            <div className="content-3">
              <div className="text-wrapper-2">+91</div>
              <div className="text-wrapper-3">9876543210</div>
            </div>
          </>
        )}

        {inputType === "area-text" && (
          <div className="content-4">
            <p className="lorem-ipsum-is">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&#39;s standard dummy text ever since the 1500s
            </p>
            <div className="word-coun-expand">
              {wordLimit && <div className="word-limit">120/500</div>}

              <img
                className="action-icon"
                alt="Action icon"
                src={
                  state === "hovered"
                    ? "https://c.animaapp.com/UUPXAe3j/img/action-icon-13.svg"
                    : state === "focused-active"
                    ? "https://c.animaapp.com/UUPXAe3j/img/action-icon-14.svg"
                    : state === "disabled"
                    ? "https://c.animaapp.com/UUPXAe3j/img/action-icon-15.svg"
                    : state === "filled"
                    ? "https://c.animaapp.com/UUPXAe3j/img/action-icon-17.svg"
                    : state === "error"
                    ? "https://c.animaapp.com/UUPXAe3j/img/action-icon-16.svg"
                    : "https://c.animaapp.com/UUPXAe3j/img/action-icon-12.svg"
                }
              />
            </div>
          </div>
        )}
      </div>
      {state === "error" && (
        <div className="error-message">
          <div className="helper-text">
            {["dropdown", "phone-number", "text-box"].includes(inputType) && <>Error message goes here!</>}

            {inputType === "area-text" && <>Helper text goes here</>}
          </div>
        </div>
      )}
    </div>
  );
};

InputField.propTypes = {
  wordLimit: PropTypes.bool,
  additionalInfo: PropTypes.bool,
  mandatoryField: PropTypes.bool,
  helperText: PropTypes.bool,
  leftIcon: PropTypes.bool,
  inputType: PropTypes.oneOf(["dropdown", "phone-number", "area-text", "text-box"]),
  device: PropTypes.oneOf(["web"]),
  state: PropTypes.oneOf(["filled", "hovered", "empty", "focused-active", "error", "disabled"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
