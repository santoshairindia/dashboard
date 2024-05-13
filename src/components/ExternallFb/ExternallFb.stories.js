import { ExternallFb } from ".";

export default {
  title: "Components/ExternallFb",
  component: ExternallFb,
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
    imageClassName: {},
    image: "https://c.animaapp.com/UUPXAe3j/img/image--3--1-8@2x.png",
    text: "2M",
    polygon: "https://c.animaapp.com/UUPXAe3j/img/polygon-10-10.svg",
    divClassName: {},
    text1: "29%",
    divClassNameOverride: {},
    img: "https://c.animaapp.com/UUPXAe3j/img/polygon-10-11.svg",
  },
};
