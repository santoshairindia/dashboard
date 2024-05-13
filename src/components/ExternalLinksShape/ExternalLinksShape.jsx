/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CheckCircle6 } from "../../icons/CheckCircle6";
import { InfoFilled5 } from "../../icons/InfoFilled5";
import { ExternallFb } from "../ExternallFb";
import "./style.css";

export const ExternalLinksShape = ({
  property1,
  className,
  externallFbImage = "https://c.animaapp.com/UUPXAe3j/img/image--3--1-5@2x.png",
  externallFbPolygon = "https://c.animaapp.com/UUPXAe3j/img/polygon-10-9.svg",
  externallFbImg = "https://c.animaapp.com/UUPXAe3j/img/polygon-10-9.svg",
  icon = <CheckCircle6 className="icon-instance-node" color="#2AA646" />,
  override = <InfoFilled5 className="icon-instance-node" />,
  externallFbPolygon1 = "https://c.animaapp.com/UUPXAe3j/img/polygon-10-17.svg",
}) => {
  return (
    <div className={`external-links-shape property-1-8-${property1} ${className}`}>
      {["dip", "rise"].includes(property1) && (
        <ExternallFb
          className="externall-fb-instance"
          divClassName="externall-fb-3"
          divClassNameOverride="externall-fb-2"
          image={externallFbImage}
          imageClassName="externall-fb-4"
          img={externallFbPolygon}
          polygon={externallFbPolygon1}
          property1={property1 === "dip" ? "dip" : "rise"}
          text="2.0 M"
          text1="29.0%"
        />
      )}

      {property1 === "dip-highlight" && (
        <div className="overlap-2">
          <ExternallFb
            className="externall-fb-5"
            divClassName="externall-fb-3"
            divClassNameOverride="externall-fb-2"
            image="https://c.animaapp.com/UUPXAe3j/img/image--3--1-5@2x.png"
            imageClassName="externall-fb-4"
            img={externallFbImg}
            property1="dip"
            text="2.0 M"
            text1="29.0%"
          />
          <div className="overlap-wrapper">
            <div className="overlap-group-2">
              <div className="ellipse-2" />
              {icon}
              <div className="icon-instance-node">
                <div className="overlap-group-2">
                  <div className="ellipse-2" />
                  {override}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ExternalLinksShape.propTypes = {
  property1: PropTypes.oneOf(["rise", "dip-highlight", "dip"]),
  externallFbImage: PropTypes.string,
  externallFbPolygon: PropTypes.string,
  externallFbImg: PropTypes.string,
  externallFbPolygon1: PropTypes.string,
};
