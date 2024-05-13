import { MainComponentData } from ".";

export default {
  title: "Components/MainComponentData",
  component: MainComponentData,
  argTypes: {
    state: {
      options: ["rise", "dip"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "rise",
    className: {},
    frameClassName: {},
    text: "0.5M",
    text1: "Landing page",
    text2: "29.0%",
  },
};
