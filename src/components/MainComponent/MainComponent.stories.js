import { MainComponent } from ".";

export default {
  title: "Components/MainComponent",
  component: MainComponent,
  argTypes: {
    state: {
      options: ["rise", "dip-highlight", "dip", "rise-highlight"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    danger2: true,
    danger: true,
    state: "rise",
    className: {},
    ellipse: "https://c.animaapp.com/UUPXAe3j/img/ellipse-174-3.svg",
    mainComponentDataFrameClassName: {},
    mainComponentDataText: "29.0%",
    mainComponentDataText1: "Landing page",
    mainComponentDataText2: "0.5M",
    overlapGroupClassName: {},
    ellipseClassName: {},
    img: "https://c.animaapp.com/UUPXAe3j/img/ellipse-174-2.svg",
    ellipseClassNameOverride: {},
    ellipse1: "https://c.animaapp.com/UUPXAe3j/img/ellipse-7718-1.svg",
    mainComponentDataFrameClassNameOverride: {},
    mainComponentDataText3: "29.0%",
    mainComponentDataText4: "Landing page",
    mainComponentDataText5: "0.5M",
  },
};
