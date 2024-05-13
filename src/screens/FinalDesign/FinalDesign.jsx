import React from "react";
import { ButtonTabGroup } from "../../components/ButtonTabGroup";
import { ExternalLinksShape } from "../../components/ExternalLinksShape";
import { FinalRates } from "../../components/FinalRates";
import { Frame } from "../../components/Frame";
import { Gap } from "../../components/Gap";
import { InputField } from "../../components/InputField";
import { KpIs } from "../../components/KpIs";
import { MainComponent } from "../../components/MainComponent";
import { RatesComponent } from "../../components/RatesComponent";
import { ActionIcon18 } from "../../icons/ActionIcon18";
import { ActionIcon19 } from "../../icons/ActionIcon19";
import { Calendar1 } from "../../icons/Calendar1";
import { CheckCircle11 } from "../../icons/CheckCircle11";
import { CheckCircle13 } from "../../icons/CheckCircle13";
import { CheckCircle15 } from "../../icons/CheckCircle15";
import { Graph10 } from "../../icons/Graph10";
import { Graph8 } from "../../icons/Graph8";
import { InfoFilled10 } from "../../icons/InfoFilled10";
import { InfoFilled11 } from "../../icons/InfoFilled11";
import { InfoFilled12 } from "../../icons/InfoFilled12";
import { InfoFilled7 } from "../../icons/InfoFilled7";
import { InfoFilled8 } from "../../icons/InfoFilled8";
import { InfoFilled9 } from "../../icons/InfoFilled9";
import "./style.css";

export const FinalDesign = () => {
  return (
    <div className="final-design">
      <div className="frame-15">
        <div className="frame-16">
          <div className="frame-17">
            <div className="frame-18">
              <div className="text-wrapper-8">Page view</div>
              <div className="frame-19">
                <div className="frame-20">
                  <div className="frame-21">
                    <p className="p">
                      <span className="span">16.8 </span>
                      <span className="span">L</span>
                    </p>
                  </div>
                </div>
                <div className="frame-22">
                  <img className="polygon-5" alt="Polygon" src="https://c.animaapp.com/UUPXAe3j/img/polygon-1-2.svg" />
                  <div className="group-6">
                    <div className="frame-23">
                      <div className="element-8">1.6%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Graph8 className="graph-8" />
          </div>
          <img className="line-2" alt="Line" src="https://c.animaapp.com/UUPXAe3j/img/line-13.svg" />
          <Frame
            className="design-component-instance-node"
            groupClassName="frame-1171276810"
            polygon="https://c.animaapp.com/UUPXAe3j/img/polygon-1-3.svg"
            property1="rise"
            text="Time on page"
            text1="00:01:38"
            text2="0.6%"
          />
          <img className="line-2" alt="Line" src="https://c.animaapp.com/UUPXAe3j/img/line-21.svg" />
          <Frame
            className="design-component-instance-node"
            groupClassName="frame-1171276810"
            icon={<Graph10 className="graph-10" />}
            img="https://c.animaapp.com/UUPXAe3j/img/polygon-1-4.svg"
            property1="dip"
            text="Visitors"
            text1="2.2&nbsp;&nbsp;L"
            text2="3.2%"
          />
          <img className="line-2" alt="Line" src="https://c.animaapp.com/UUPXAe3j/img/line-22.svg" />
          <Frame
            className="design-component-instance-node"
            groupClassName="frame-1171276810"
            icon={<Graph8 className="graph-8" />}
            polygon="https://c.animaapp.com/UUPXAe3j/img/polygon-1-5.svg"
            property1="rise"
            text="Visits"
            text1="2.7 L"
            text2="1.5%"
          />
          <img className="line-2" alt="Line" src="https://c.animaapp.com/UUPXAe3j/img/line-23.svg" />
          <Frame
            className="design-component-instance-node"
            groupClassName="frame-1171276810"
            icon={<Graph10 className="graph-10" />}
            img="https://c.animaapp.com/UUPXAe3j/img/polygon-1-6.svg"
            property1="dip"
            text="Stickiness"
            text1="9.2 L"
            text2="2.8%"
          />
          <img className="line-2" alt="Line" src="https://c.animaapp.com/UUPXAe3j/img/line-24.svg" />
          <Frame
            className="design-component-instance-node"
            groupClassName="frame-1171276810"
            icon={<Graph8 className="graph-8" />}
            polygon="https://c.animaapp.com/UUPXAe3j/img/polygon-1-7.svg"
            property1="rise"
            text="Bounce rate"
            text1="18.0 %"
            text2="1.8%"
          />
          <img className="line-2" alt="Line" src="https://c.animaapp.com/UUPXAe3j/img/line-25.svg" />
          <Frame
            className="design-component-instance-node"
            groupClassName="frame-1171276810"
            icon={<Graph8 className="graph-8" />}
            polygon="https://c.animaapp.com/UUPXAe3j/img/polygon-1-8.svg"
            property1="rise"
            text="Depth of visit"
            text1="6.2"
            text2="2.6%"
          />
          <img className="line-2" alt="Line" src="https://c.animaapp.com/UUPXAe3j/img/line-26.svg" />
          <Frame
            className="design-component-instance-node"
            divClassName="frame-instance"
            divClassNameOverride="frame-instance"
            groupClassName="frame-1171276810"
            icon={<Graph8 className="graph-8" />}
            img="https://c.animaapp.com/UUPXAe3j/img/polygon-1-9.svg"
            property1="dip"
            text="Length of visit"
            text1="0.6 %"
            text2="0.0%"
          />
          <img className="line-2" alt="Line" src="https://c.animaapp.com/UUPXAe3j/img/line-27.svg" />
          <Frame
            className="design-component-instance-node"
            divClassName="frame-1171276810-instance"
            divClassNameOverride="frame-1171276810-instance"
            groupClassName="frame-1171276810"
            icon={<Graph10 className="graph-10" />}
            polygon="https://c.animaapp.com/UUPXAe3j/img/polygon-1-10.svg"
            property1="rise"
            text="Frequency"
            text1="1.1 %"
            text2="1.1%"
          />
        </div>
      </div>
      <div className="notifications-total-wrapper">
        <p className="notifications-total">
          <span className="text-wrapper-9">Notifications</span>
          <span className="text-wrapper-10">&nbsp;&nbsp;</span>
          <span className="text-wrapper-11">| </span>
          <span className="text-wrapper-10"> Total Web Sales Crossed 20 Crores by 3 PM&nbsp;&nbsp;</span>
          <span className="text-wrapper-11"> | </span>
          <span className="text-wrapper-10">&nbsp;&nbsp;25 Times spike in API Errors&nbsp;&nbsp;</span>
          <span className="text-wrapper-11">| </span>
          <span className="text-wrapper-10"> 10% Decline in Total visitors from the previous day&nbsp;&nbsp;</span>
          <span className="text-wrapper-11">| </span>
          <span className="text-wrapper-10"> 10% Decline in Total visitors from the previous day </span>
        </p>
      </div>
      <div className="overlap-6">
        <div className="frame-24">
          <div className="frame-25">
            <div className="frame-26">
              <img
                className="logo-group"
                alt="Logo group"
                src="https://c.animaapp.com/UUPXAe3j/img/logo-group@2x.png"
              />
              <div className="rectangle-4" />
              <p className="dashboard-for-all">DASHBOARD FOR ALL DEVICE TYPE</p>
            </div>
            <img className="group-7" alt="Group" src="https://c.animaapp.com/UUPXAe3j/img/group-168418.svg" />
          </div>
          <div className="frame-25">
            <div className="frame-27">
              <div className="input-field-wrapper">
                <InputField
                  device="web"
                  icon={<ActionIcon18 className="action-icon-2" />}
                  inputType="dropdown"
                  labelClassName="input-field-deprecated"
                  state="empty"
                  text="User"
                  text1="All"
                />
              </div>
              <div className="input-field-wrapper">
                <InputField
                  device="web"
                  icon={<ActionIcon19 className="action-icon-2" />}
                  inputType="dropdown"
                  labelClassName="input-field-deprecated"
                  state="empty"
                  text="Devices"
                  text1="All"
                />
              </div>
            </div>
            <ButtonTabGroup
              baseTabItemIcon={<Calendar1 className="calendar-1" />}
              baseTabItemTabLabel="Day"
              baseTabItemTabLabel1="Month"
              baseTabItemTabLabel2="Year"
              baseTabItemTabLabel3="Date picker"
              baseTabItemWithIcon
              className="design-component-instance-node"
              size="medium"
              tab5={false}
              withIcon={false}
            />
          </div>
        </div>
      </div>
      <div className="overlap-7">
        <img className="vector-3" alt="Vector" src="https://c.animaapp.com/UUPXAe3j/img/vector-247.svg" />
        <img className="vector-4" alt="Vector" src="https://c.animaapp.com/UUPXAe3j/img/vector-249.svg" />
        <img className="vector-5" alt="Vector" src="https://c.animaapp.com/UUPXAe3j/img/vector-250.svg" />
        <div className="group-8">
          <div className="overlap-8">
            <div className="group-9">
              <div className="overlap-9">
                <img className="subtract" alt="Subtract" src="https://c.animaapp.com/UUPXAe3j/img/subtract-6.svg" />
                <KpIs
                  className="KP-is-instance"
                  property1="rise"
                  ratesComponentText={
                    <>
                      Ad click <br />
                      rate
                    </>
                  }
                />
                <div className="frame-28">
                  <div className="text-wrapper-12">Online Ad</div>
                </div>
                <KpIs
                  className="KP-is-3"
                  icon={<CheckCircle11 className="icon-instance-node-2" />}
                  overlapClassName="KP-is-2"
                  override={<InfoFilled7 className="icon-instance-node-2" />}
                  property1="dip-highlight"
                  ratesComponentText1="Ad conversion rate"
                />
              </div>
            </div>
            <div className="group-10">
              <div className="overlap-10">
                <div className="group-10">
                  <div className="overlap-10">
                    <div className="group-11">
                      <div className="overlap-11">
                        <div className="group-12">
                          <KpIs
                            className="KP-is-5"
                            icon={<CheckCircle11 className="icon-instance-node-2" />}
                            override={<InfoFilled8 className="icon-instance-node-2" />}
                            property1="dip-highlight"
                            ratesComponentDivClassName="KP-is-4"
                            ratesComponentText1="Number of customers"
                          />
                          <img
                            className="vector-6"
                            alt="Vector"
                            src="https://c.animaapp.com/UUPXAe3j/img/vector-235.svg"
                          />
                        </div>
                        <div className="group-13">
                          <KpIs
                            className="KP-is-6"
                            property1="rise"
                            ratesComponentDivClassNameOverride="KP-is-4"
                            ratesComponentText="Purchase frequency"
                          />
                          <img
                            className="vector-7"
                            alt="Vector"
                            src="https://c.animaapp.com/UUPXAe3j/img/vector-236.svg"
                          />
                        </div>
                        <div className="group-14">
                          <KpIs
                            className="KP-is-6"
                            property1="dip"
                            ratesComponentDivClassNameOverride="KP-is-4"
                            ratesComponentText="Online Revenue &amp; profile"
                          />
                          <img
                            className="vector-8"
                            alt="Vector"
                            src="https://c.animaapp.com/UUPXAe3j/img/vector-237.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="group-15">
                      <div className="overlap-10">
                        <div className="group-16">
                          <ExternalLinksShape
                            className="external-links-shape-instance"
                            externallFbImage="https://c.animaapp.com/UUPXAe3j/img/image--3--1-3@2x.png"
                            property1="rise"
                          />
                          <img
                            className="vector-9"
                            alt="Vector"
                            src="https://c.animaapp.com/UUPXAe3j/img/vector-243.svg"
                          />
                        </div>
                        <div className="group-17">
                          <ExternalLinksShape
                            className="external-links-shape-instance"
                            externallFbImage="https://c.animaapp.com/UUPXAe3j/img/image--3--1-4@2x.png"
                            externallFbPolygon="https://c.animaapp.com/UUPXAe3j/img/polygon-10-19.svg"
                            property1="dip"
                          />
                          <img
                            className="vector-10"
                            alt="Vector"
                            src="https://c.animaapp.com/UUPXAe3j/img/vector-244.svg"
                          />
                        </div>
                        <div className="group-18">
                          <ExternalLinksShape
                            className="external-links-shape-instance"
                            externallFbImg="https://c.animaapp.com/UUPXAe3j/img/polygon-10-19.svg"
                            icon={<CheckCircle13 className="icon-instance-node-2" />}
                            override={<InfoFilled9 className="icon-instance-node-2" />}
                            property1="dip-highlight"
                          />
                          <img
                            className="vector-11"
                            alt="Vector"
                            src="https://c.animaapp.com/UUPXAe3j/img/vector-245.svg"
                          />
                        </div>
                        <div className="group-19">
                          <ExternalLinksShape
                            className="external-links-shape-instance"
                            externallFbImage="https://c.animaapp.com/UUPXAe3j/img/image--3--1-6@2x.png"
                            externallFbPolygon1="https://c.animaapp.com/UUPXAe3j/img/polygon-10-20.svg"
                            property1="rise"
                          />
                          <img
                            className="vector-12"
                            alt="Vector"
                            src="https://c.animaapp.com/UUPXAe3j/img/vector-234.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="group-20">
                      <div className="overlap-12">
                        <div className="group-21">
                          <div className="overlap-13">
                            <img
                              className="vector-13"
                              alt="Vector"
                              src="https://c.animaapp.com/UUPXAe3j/img/vector-214.svg"
                            />
                            <FinalRates
                              className="final-rates-instance"
                              icon={<CheckCircle11 className="icon-instance-node-2" />}
                              overlapClassName="final-rates-2"
                              property1="rise"
                              ratesComponentText="29.8 %"
                              ratesComponentText1="29.8%"
                              ratesComponentText2={
                                <>
                                  Click to <br />
                                  basket rate
                                </>
                              }
                            />
                          </div>
                        </div>
                        <div className="overlap-14">
                          <div className="group-22">
                            <div className="overlap-15">
                              <img
                                className="vector-14"
                                alt="Vector"
                                src="https://c.animaapp.com/UUPXAe3j/img/vector-214-1.svg"
                              />
                              <FinalRates
                                className="final-rates-3"
                                icon1={<InfoFilled10 className="icon-instance-node-2" />}
                                override={<CheckCircle15 className="icon-instance-node-2" />}
                                property1="dip-h-30"
                                ratesComponentPolygon="https://c.animaapp.com/UUPXAe3j/img/polygon-10-21.svg"
                                ratesComponentText3="29.4 %"
                                ratesComponentText4="29.4%"
                              />
                            </div>
                          </div>
                          <div className="group-23">
                            <div className="overlap-16">
                              <img
                                className="vector-15"
                                alt="Vector"
                                src="https://c.animaapp.com/UUPXAe3j/img/vector-214-2.svg"
                              />
                              <div className="rates-component-wrapper">
                                <RatesComponent
                                  className="rates-component-3"
                                  property1="rise"
                                  text={
                                    <>
                                      Basket to <br />
                                      buy rate
                                    </>
                                  }
                                  text1="12.7%"
                                  text2="12.7 %"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="group-24">
                            <div className="overlap-17">
                              <div className="gap-2">
                                <div className="overlap-group-6">
                                  <img
                                    className="rectangle-5"
                                    alt="Rectangle"
                                    src="https://c.animaapp.com/UUPXAe3j/img/rectangle-40189-1.svg"
                                  />
                                  <div className="group-25">
                                    <div className="frame-29">
                                      <div className="frame-30">
                                        <img
                                          className="schedule-2"
                                          alt="Schedule"
                                          src="https://c.animaapp.com/UUPXAe3j/img/schedule-1@2x.png"
                                        />
                                        <div className="element-sec-2">1.2 sec</div>
                                      </div>
                                      <div className="text-wrapper-13">Loading time</div>
                                    </div>
                                    <img
                                      className="vector-16"
                                      alt="Vector"
                                      src="https://c.animaapp.com/UUPXAe3j/img/vector-253-1.svg"
                                    />
                                    <img
                                      className="vector-17"
                                      alt="Vector"
                                      src="https://c.animaapp.com/UUPXAe3j/img/vector-254-1.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="gap-3">
                                <div className="overlap-18">
                                  <img
                                    className="rectangle-6"
                                    alt="Rectangle"
                                    src="https://c.animaapp.com/UUPXAe3j/img/rectangle-40189-2.svg"
                                  />
                                  <div className="group-26">
                                    <div className="frame-29">
                                      <div className="frame-30">
                                        <img
                                          className="schedule-3"
                                          alt="Schedule"
                                          src="https://c.animaapp.com/UUPXAe3j/img/schedule-2@2x.png"
                                        />
                                        <div className="element-sec-2">1.2 sec</div>
                                      </div>
                                      <div className="text-wrapper-13">Loading time</div>
                                    </div>
                                    <img
                                      className="vector-18"
                                      alt="Vector"
                                      src="https://c.animaapp.com/UUPXAe3j/img/vector-253-2.svg"
                                    />
                                    <img
                                      className="vector-19"
                                      alt="Vector"
                                      src="https://c.animaapp.com/UUPXAe3j/img/vector-254-2.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                              <Gap className="gap-instance" overlapClassName="gap-4" state="default" text="1.2 sec" />
                              <MainComponent
                                className="main-component-circle"
                                ellipse="https://c.animaapp.com/UUPXAe3j/img/ellipse-174-4.svg"
                                mainComponentDataFrameClassName="main-component-instance"
                                mainComponentDataText="5.7%"
                                mainComponentDataText1="Product page"
                                mainComponentDataText2="59.0 K"
                                state="dip"
                              />
                              <MainComponent
                                className="group-30"
                                ellipse1="https://c.animaapp.com/UUPXAe3j/img/ellipse-7718-2.svg"
                                ellipseClassName="group-27"
                                ellipseClassNameOverride="group-28"
                                icon={<InfoFilled11 className="info-filled-2" />}
                                img="https://c.animaapp.com/UUPXAe3j/img/ellipse-174-5.svg"
                                mainComponentDataFrameClassNameOverride="group-29"
                                mainComponentDataText3="2.1%"
                                mainComponentDataText4="Order page"
                                mainComponentDataText5="17.0 K"
                                overlapGroupClassName="main-component-circle-instance"
                                state="dip-highlight"
                              />
                              <MainComponent
                                className="group-31"
                                ellipse1="https://c.animaapp.com/UUPXAe3j/img/ellipse-7718-3.svg"
                                ellipseClassName="group-33"
                                ellipseClassNameOverride="group-34"
                                icon={<InfoFilled12 className="info-filled-2" />}
                                img="https://c.animaapp.com/UUPXAe3j/img/ellipse-174-6.svg"
                                mainComponentDataText3="6.7%"
                                mainComponentDataText4="Landing page"
                                mainComponentDataText5="2.0 L"
                                overlapGroupClassName="group-32"
                                state="dip-highlight"
                              />
                              <MainComponent
                                className="group-35"
                                ellipse="https://c.animaapp.com/UUPXAe3j/img/ellipse-174-7.svg"
                                mainComponentDataFrameClassName="group-29"
                                mainComponentDataText="5.1%"
                                mainComponentDataText1="Basket page"
                                mainComponentDataText2="2.3 K"
                                state="dip"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-36">
                  <div className="group-37">
                    <div className="overlap-group-7">
                      <img
                        className="vector-20"
                        alt="Vector"
                        src="https://c.animaapp.com/UUPXAe3j/img/vector-249-1.svg"
                      />
                      <div className="rectangle-7" />
                      <div className="rectangle-8" />
                      <div className="frame-31">
                        <div className="text-wrapper-14">Order rate</div>
                        <div className="text-wrapper-15">40 %</div>
                      </div>
                    </div>
                  </div>
                  <div className="group-38">
                    <div className="overlap-19">
                      <img
                        className="vector-21"
                        alt="Vector"
                        src="https://c.animaapp.com/UUPXAe3j/img/vector-249-2.svg"
                      />
                      <div className="rectangle-9" />
                      <div className="rectangle-10" />
                      <div className="frame-32">
                        <div className="text-wrapper-14">Conversion rate</div>
                        <div className="text-wrapper-15">70 %</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
