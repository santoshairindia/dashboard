/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LocalSee } from "../../icons/LocalSee";
import { QueueMusic } from "../../icons/QueueMusic";
import { Search1 } from "../../icons/Search1";
import { Share } from "../../icons/Share";
import { Spa } from "../../icons/Spa";
import { BaseExtras } from "../BaseExtras";
import { BaseTabItem } from "../BaseTabItem";
import "./style.css";

export const ButtonTabGroup = ({
  tab4 = true,
  tab5 = true,
  tab3 = true,
  size,
  withIcon,
  className,
  baseTabItemTabLabel = "Co-Branded",
  baseTabItemTabLabel1 = "CardsPoints",
  baseTabItemTabLabel2 = "ConversionCar",
  baseTabItemWithIcon = false,
  baseTabItemIcon,
  baseTabItemTabLabel3 = "RentalExperiences",
}) => {
  return (
    <div className={`button-tab-group size-4-${size} ${className}`}>
      {size === "medium" && (
        <div className="tabs">
          <BaseTabItem
            className="instance-node"
            frameClassName={`${withIcon && "base-tab-item-instance"}`}
            icon={withIcon ? <Search1 className="instance-node-2" /> : undefined}
            size="medium"
            style="nunito"
            tab="button-tab-selected"
            tabLabel={baseTabItemTabLabel}
            withIcon={!withIcon ? false : true}
          />
          <div className="base-extras-2" />
          <BaseTabItem
            className="instance-node"
            icon={withIcon ? <LocalSee className="instance-node-2" /> : undefined}
            size="medium"
            style="nunito"
            tab="button-tab-unselected"
            tabLabel={baseTabItemTabLabel1}
            withIcon={!withIcon ? false : true}
          />
          {tab3 && <BaseExtras className="base-extras-instance" type="separator" />}

          {tab3 && (
            <BaseTabItem
              className="instance-node"
              icon={withIcon ? <QueueMusic className="instance-node-2" /> : undefined}
              size="medium"
              style="nunito"
              tab="button-tab-unselected"
              tabLabel={baseTabItemTabLabel2}
              withIcon={!withIcon ? false : true}
            />
          )}

          {tab4 && <BaseExtras className="base-extras-instance" type="separator" />}

          {tab4 && (
            <BaseTabItem
              className="instance-node"
              icon={baseTabItemIcon}
              size="medium"
              style="nunito"
              tab="button-tab-unselected"
              tabLabel={baseTabItemTabLabel3}
              withIcon={baseTabItemWithIcon}
            />
          )}

          {tab5 && <BaseExtras className="base-extras-instance" type="separator" />}

          {tab5 && (
            <BaseTabItem
              className="instance-node"
              icon={withIcon ? <Spa className="instance-node-2" /> : undefined}
              size="medium"
              style="nunito"
              tab="button-tab-unselected"
              tabLabel="LifestyleStays"
              withIcon={!withIcon ? false : true}
            />
          )}
        </div>
      )}

      {size === "small" && (
        <>
          <BaseTabItem
            className="instance-node"
            frameClassName="base-tab-item-instance"
            icon={withIcon ? <Search1 className="instance-node-2" /> : undefined}
            size="small"
            style="nunito"
            tab="button-tab-selected"
            tabLabel="Co-Branded"
            withIcon={!withIcon ? false : true}
          />
          <div className="base-extras-3" />
          <BaseTabItem
            className="instance-node"
            icon={withIcon ? <LocalSee className="instance-node-2" /> : undefined}
            size="small"
            style="nunito"
            tab="button-tab-unselected"
            tabLabel="CardsPoints"
            withIcon={!withIcon ? false : true}
          />
          <>{tab3 && <BaseExtras className="base-extras-4" type="separator" />}</>
          <>
            {tab3 && (
              <BaseTabItem
                className="instance-node"
                icon={withIcon ? <QueueMusic className="instance-node-2" /> : undefined}
                size="small"
                style="nunito"
                tab="button-tab-unselected"
                tabLabel="ConversionCar"
                withIcon={!withIcon ? false : true}
              />
            )}
          </>
          <>{tab4 && <BaseExtras className="base-extras-4" type="separator" />}</>
          <>
            {tab4 && (
              <BaseTabItem
                className="instance-node"
                icon={withIcon ? <Share className="instance-node-2" /> : undefined}
                size="small"
                style="nunito"
                tab="button-tab-unselected"
                tabLabel="RentalExperiences"
                withIcon={!withIcon ? false : true}
              />
            )}
          </>
          <>{tab5 && <BaseExtras className="base-extras-4" type="separator" />}</>
          <>
            {tab5 && (
              <BaseTabItem
                className="instance-node"
                icon={withIcon ? <Spa className="instance-node-2" /> : undefined}
                size="small"
                style="nunito"
                tab="button-tab-unselected"
                tabLabel="LifestyleStays"
                withIcon={!withIcon ? false : true}
              />
            )}
          </>
        </>
      )}
    </div>
  );
};

ButtonTabGroup.propTypes = {
  tab4: PropTypes.bool,
  tab5: PropTypes.bool,
  tab3: PropTypes.bool,
  size: PropTypes.oneOf(["medium", "small"]),
  withIcon: PropTypes.bool,
  baseTabItemTabLabel: PropTypes.string,
  baseTabItemTabLabel1: PropTypes.string,
  baseTabItemTabLabel2: PropTypes.string,
  baseTabItemWithIcon: PropTypes.bool,
  baseTabItemTabLabel3: PropTypes.string,
};
