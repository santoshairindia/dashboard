/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Search9 } from "../../icons/Search9";
import "./style.css";

export const BaseTabItem = ({
  tabLabel = "Tab 2",
  tab,
  style,
  size,
  withIcon,
  className,
  icon = <Search9 className="search" color="#DA0E29" />,
  frameClassName,
}) => {
  return (
    <div className={`base-tab-item ${style} ${tab} ${size} ${className}`}>
      {(tab === "selected" || (style === "AI" && tab === "unselected")) && (
        <>
          <div className="frame-3">
            {withIcon && ["AI", "nunito"].includes(style) && (
              <Search9 className="search" color={tab === "selected" ? "#DA0E29" : "#828A99"} />
            )}

            {withIcon && ["AI", "nunito"].includes(style) && (style === "nunito" || tab === "selected") && (
              <>
                <div className="domestic">{tabLabel}</div>
                <div className="rectangle" />
              </>
            )}

            {(!withIcon || style === "AI-stacked") && (
              <div className={`domestic-2 style-2-${style} with-icon-${withIcon} tab-${tab} size-0-${size}`}>
                {!withIcon && <>{tabLabel}</>}

                {style === "AI-stacked" && (
                  <>
                    <Search9 className="search" color="#DA0E29" />
                    <div className="domestic-3">{tabLabel}</div>
                  </>
                )}
              </div>
            )}

            {tab === "unselected" && withIcon && <div className="domestic-4">{tabLabel}</div>}
          </div>
          <div className="rectangle-2" />
        </>
      )}

      {(tab === "button-tab-selected" ||
        tab === "button-tab-unselected" ||
        (style === "AI-stacked" && tab === "unselected") ||
        (style === "nunito" && tab === "unselected")) && (
        <div
          className={`frame-4 style-3-${style} tab-1-${tab} with-icon-0-${withIcon} size-2-${size} ${frameClassName}`}
        >
          {style === "nunito" && withIcon && (
            <>
              {icon}
              <div className="domestic-5">{tabLabel}</div>
            </>
          )}

          {(!withIcon || style === "AI-stacked") && (
            <div className="domestic-6">
              {style === "nunito" && <>{tabLabel}</>}

              {style === "AI-stacked" && (
                <>
                  <Search9 className="search" color="#828A99" />
                  <div className="domestic-7">{tabLabel}</div>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

BaseTabItem.propTypes = {
  tabLabel: PropTypes.string,
  tab: PropTypes.oneOf(["unselected", "button-tab-unselected", "selected", "button-tab-selected"]),
  style: PropTypes.oneOf(["nunito", "AI-stacked", "AI"]),
  size: PropTypes.oneOf(["medium", "small"]),
  withIcon: PropTypes.bool,
};
