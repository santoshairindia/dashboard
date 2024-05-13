import { RatesComponent } from ".";

export default {
  title: "Components/RatesComponent",
  component: RatesComponent,
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
    text: "Display <br/>click rate",
    text1: "29%",
    polygon: "https://c.animaapp.com/UUPXAe3j/img/polygon-10-6.svg",
    divClassName: {},
    text2: "2.0 M",
  },
};
