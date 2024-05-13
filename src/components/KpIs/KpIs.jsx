/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CheckCircle6 } from "../../icons/CheckCircle6";
import { InfoFilled6 } from "../../icons/InfoFilled6";
import { RatesComponent } from "../RatesComponent";
import "./style.css";

export const KpIs = ({
  property1,
  className,
  ratesComponentText = "Display <br/>click rate",
  overlapClassName,
  icon = <CheckCircle6 className="check-circle" color="#2AA646" />,
  override = <InfoFilled6 className="check-circle" />,
  ratesComponentText1 = "Display <br/>click rate",
  ratesComponentDivClassName,
  ratesComponentDivClassNameOverride,
}) => {
  return (
    <div className={`KP-is property-1-2-${property1} ${className}`}>
      {["dip", "rise"].includes(property1) && (
        <RatesComponent
          className="rates-component-instance"
          divClassName={ratesComponentDivClassNameOverride}
          polygon={property1 === "dip" ? "https://c.animaapp.com/UUPXAe3j/img/polygon-10-16.svg" : undefined}
          property1={property1 === "dip" ? "dip" : "rise"}
          text={ratesComponentText}
          text1="29.0%"
          text2="2.0 M"
        />
      )}

      {["dip-highlight", "rise-highlight"].includes(property1) && (
        <div className={`overlap ${overlapClassName}`}>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="ellipse" />
              {property1 === "rise-highlight" && <CheckCircle6 className="check-circle" color="#2AA646" />}

              {property1 === "dip-highlight" && (
                <>
                  {icon}
                  <div className="check-circle">
                    <div className="overlap-group">
                      <div className="ellipse" />
                      {override}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <RatesComponent
            className={`${property1 === "dip-highlight" ? "class" : "class-2"}`}
            divClassName={ratesComponentDivClassName}
            polygon={
              property1 === "dip-highlight" ? "https://c.animaapp.com/UUPXAe3j/img/polygon-10-16.svg" : undefined
            }
            property1={property1 === "dip-highlight" ? "dip" : "rise"}
            text={ratesComponentText1}
            text1="29.0%"
            text2="2.0 M"
          />
        </div>
      )}
    </div>
  );
};

KpIs.propTypes = {
  property1: PropTypes.oneOf(["rise", "dip-highlight", "dip", "rise-highlight"]),
  ratesComponentText: PropTypes.string,
  ratesComponentText1: PropTypes.string,
};
