/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Arrow2 } from "../../icons/Arrow2";
import { Graph5 } from "../../icons/Graph5";
import "./style.css";

export const MainComponentData = ({
  state,
  className,
  frameClassName,
  text = "0.5M",
  text1 = "Landing page",
  text2 = "29.0%",
}) => {
  return (
    <div className={`main-component-data ${className}`}>
      <div className={`frame-11 ${frameClassName}`}>
        <div className={`element-5 state-${state}`}>{text}</div>
        <div className="landing-page">{text1}</div>
      </div>
      <Graph5 className="graph-5" color={state === "dip" ? "#DA0E29" : "#158C30"} />
      <div className="frame-12">
        <div className={`frame-13 state-0-${state}`}>
          {state === "rise" && (
            <>
              <img className="polygon-4" alt="Polygon" src="https://c.animaapp.com/UUPXAe3j/img/polygon-10-2.svg" />
              <div className="element-6">{text2}</div>
            </>
          )}

          {state === "dip" && (
            <>
              <Arrow2 className="arrow-2" />
              <div className="frame-14">
                <div className="element-7">{text2}</div>
              </div>
            </>
          )}
        </div>
        <div className="text-wrapper-7">vs last day</div>
      </div>
    </div>
  );
};

MainComponentData.propTypes = {
  state: PropTypes.oneOf(["rise", "dip"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
