/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ExternallFb = ({
  property1,
  className,
  imageClassName,
  image = "https://c.animaapp.com/UUPXAe3j/img/image--3--1-8@2x.png",
  text = "2M",
  polygon = "https://c.animaapp.com/UUPXAe3j/img/polygon-10-10.svg",
  divClassName,
  text1 = "29%",
  divClassNameOverride,
  img = "https://c.animaapp.com/UUPXAe3j/img/polygon-10-11.svg",
}) => {
  return (
    <div className={`externall-fb ${className}`}>
      <img className={`image ${imageClassName}`} alt="Image" src={image} />
      <div className="frame-7">
        <div className="element-m-wrapper">
          <div className={`element-3 property-1-5-${property1}`}>{text}</div>
        </div>
        <div className="frame-8">
          <img
            className={`polygon-3 property-1-6-${property1}`}
            alt="Polygon"
            src={property1 === "dip" ? img : polygon}
          />
          <div className={`element-4 property-1-7-${property1} ${divClassName}`}>{text1}</div>
        </div>
        <div className={`text-wrapper-5 ${divClassNameOverride}`}>vs last day</div>
      </div>
    </div>
  );
};

ExternallFb.propTypes = {
  property1: PropTypes.oneOf(["rise", "dip"]),
  image: PropTypes.string,
  text: PropTypes.string,
  polygon: PropTypes.string,
  text1: PropTypes.string,
  img: PropTypes.string,
};
