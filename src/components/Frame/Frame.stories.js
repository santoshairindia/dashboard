import { Frame } from ".";

export default {
  title: "Components/Frame",
  component: Frame,
  argTypes: {
    property1: {
      options: ["rise", "dip"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "rise",
    className: {},
    text: "Page view",
    text1: "2M",
    polygon: "https://c.animaapp.com/UUPXAe3j/img/polygon-1.svg",
    groupClassName: {},
    text2: "40%",
    img: "https://c.animaapp.com/UUPXAe3j/img/polygon-1-1.svg",
    divClassName: {},
    divClassNameOverride: {},
  },
};
