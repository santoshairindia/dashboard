/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CheckCircle6 } from "../../icons/CheckCircle6";
import { InfoFilled3 } from "../../icons/InfoFilled3";
import { InfoFilled4 } from "../../icons/InfoFilled4";
import { RatesComponent } from "../RatesComponent";
import "./style.css";

export const FinalRates = ({
  rise = true,
  property1,
  className,
  overlapClassName,
  ratesComponentText = "2.0 M",
  ratesComponentText1 = "29%",
  ratesComponentText2 = "Display <br/>click rate",
  icon = <CheckCircle6 className="check-circle-6" color="#2AA646" />,
  ratesComponentText3 = "2.0 M",
  ratesComponentPolygon = "https://c.animaapp.com/UUPXAe3j/img/polygon-10-6.svg",
  ratesComponentText4 = "29%",
  override = <CheckCircle6 className="check-circle-6" color="#DA0E29" />,
  icon1 = <InfoFilled4 className="check-circle-6" />,
}) => {
  return (
    <div className={`final-rates ${property1} ${className}`}>
      {["dip-h-30", "dip-h30", "rise-h-30", "rise-h30"].includes(property1) && (
        <>
          <RatesComponent
            className="rates-component-2"
            polygon={ratesComponentPolygon}
            property1={["dip-h-30", "dip-h30"].includes(property1) ? "dip" : "rise"}
            text={
              <>
                Display <br />
                click rate
              </>
            }
            text1={ratesComponentText4}
            text2={ratesComponentText3}
          />
          <>
            {rise && (
              <div className="group-2">
                <div className="overlap-group-3">
                  <div className="ellipse-3" />
                  {["rise-h-30", "rise-h30"].includes(property1) && (
                    <CheckCircle6 className="check-circle-6" color="#2AA646" />
                  )}

                  {["dip-h-30", "dip-h30"].includes(property1) && (
                    <>
                      {override}
                      <div className="check-circle-6">
                        <div className="overlap-group-3">
                          <div className="ellipse-3" />
                          {icon1}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </>
        </>
      )}

      {["dip", "rise"].includes(property1) && (
        <div className={`overlap-3 ${overlapClassName}`}>
          <RatesComponent
            className="rates-component-2"
            polygon={property1 === "dip" ? "https://c.animaapp.com/UUPXAe3j/img/polygon-10-6.svg" : undefined}
            property1={property1 === "dip" ? "dip" : "rise"}
            text={ratesComponentText2}
            text1={ratesComponentText1}
            text2={ratesComponentText}
          />
          {rise && (
            <div className="group-2">
              <div className="overlap-group-3">
                <div className="ellipse-3" />
                {property1 === "rise" && <>{icon}</>}

                {property1 === "dip" && (
                  <>
                    <CheckCircle6 className="check-circle-6" color="#DA0E29" />
                    <div className="check-circle-6">
                      <div className="overlap-group-3">
                        <div className="ellipse-3" />
                        <InfoFilled3 className="check-circle-6" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

FinalRates.propTypes = {
  rise: PropTypes.bool,
  property1: PropTypes.oneOf(["dip", "rise", "dip-h30", "rise-h30", "dip-h-30", "rise-h-30"]),
  ratesComponentText: PropTypes.string,
  ratesComponentText1: PropTypes.string,
  ratesComponentText2: PropTypes.string,
  ratesComponentText3: PropTypes.string,
  ratesComponentPolygon: PropTypes.string,
  ratesComponentText4: PropTypes.string,
};
