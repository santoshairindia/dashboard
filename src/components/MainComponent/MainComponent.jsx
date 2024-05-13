/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { InfoFilled } from "../../icons/InfoFilled";
import { MainComponentData } from "../MainComponentData";
import "./style.css";

export const MainComponent = ({
  danger2 = true,
  danger = true,
  state,
  className,
  ellipse = "https://c.animaapp.com/UUPXAe3j/img/ellipse-174-3.svg",
  mainComponentDataFrameClassName,
  mainComponentDataText = "29.0%",
  mainComponentDataText1 = "Landing page",
  mainComponentDataText2 = "0.5M",
  overlapGroupClassName,
  ellipseClassName,
  img = "https://c.animaapp.com/UUPXAe3j/img/ellipse-174-2.svg",
  ellipseClassNameOverride,
  ellipse1 = "https://c.animaapp.com/UUPXAe3j/img/ellipse-7718-1.svg",
  icon = <InfoFilled className="info-filled" />,
  mainComponentDataFrameClassNameOverride,
  mainComponentDataText3 = "29.0%",
  mainComponentDataText4 = "Landing page",
  mainComponentDataText5 = "0.5M",
}) => {
  return (
    <div className={`main-component ${className}`}>
      <div className="overlap-4">
        <div className="group-4">
          {["dip", "rise"].includes(state) && (
            <img
              className="ellipse-4"
              alt="Ellipse"
              src={state === "dip" ? ellipse : "https://c.animaapp.com/UUPXAe3j/img/ellipse-174-1.svg"}
            />
          )}

          {["dip-highlight", "rise-highlight"].includes(state) && (
            <div className={`overlap-group-5 state-1-${state} ${overlapGroupClassName}`}>
              <img
                className={`ellipse-5 ${ellipseClassName}`}
                alt="Ellipse"
                src={state === "dip-highlight" ? img : "https://c.animaapp.com/UUPXAe3j/img/ellipse-174.svg"}
              />
              <img
                className={`ellipse-6 ${ellipseClassNameOverride}`}
                alt="Ellipse"
                src={state === "dip-highlight" ? ellipse1 : "https://c.animaapp.com/UUPXAe3j/img/ellipse-7718.svg"}
              />
            </div>
          )}
        </div>
        {["dip-highlight", "rise-highlight"].includes(state) && (
          <div className="group-5">
            <div className="overlap-5">
              <div className="ellipse-7" />
              {icon}
            </div>
          </div>
        )}

        <MainComponentData
          className="main-component-data-instance"
          frameClassName={
            ["dip-highlight", "rise-highlight"].includes(state)
              ? mainComponentDataFrameClassNameOverride
              : mainComponentDataFrameClassName
          }
          state={["dip-highlight", "dip"].includes(state) ? "dip" : "rise"}
          text={["dip-highlight", "rise-highlight"].includes(state) ? mainComponentDataText5 : mainComponentDataText2}
          text1={["dip-highlight", "rise-highlight"].includes(state) ? mainComponentDataText4 : mainComponentDataText1}
          text2={["dip-highlight", "rise-highlight"].includes(state) ? mainComponentDataText3 : mainComponentDataText}
        />
      </div>
    </div>
  );
};

MainComponent.propTypes = {
  danger2: PropTypes.bool,
  danger: PropTypes.bool,
  state: PropTypes.oneOf(["rise", "dip-highlight", "dip", "rise-highlight"]),
  ellipse: PropTypes.string,
  mainComponentDataText: PropTypes.string,
  mainComponentDataText1: PropTypes.string,
  mainComponentDataText2: PropTypes.string,
  img: PropTypes.string,
  ellipse1: PropTypes.string,
  mainComponentDataText3: PropTypes.string,
  mainComponentDataText4: PropTypes.string,
  mainComponentDataText5: PropTypes.string,
};
