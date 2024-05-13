import { ExternalLinksShape } from ".";

export default {
  title: "Components/ExternalLinksShape",
  component: ExternalLinksShape,
  argTypes: {
    property1: {
      options: ["rise", "dip-highlight", "dip"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "rise",
    className: {},
    externallFbImage: "https://c.animaapp.com/UUPXAe3j/img/image--3--1-5@2x.png",
    externallFbPolygon: "https://c.animaapp.com/UUPXAe3j/img/polygon-10-9.svg",
    externallFbImg: "https://c.animaapp.com/UUPXAe3j/img/polygon-10-9.svg",
    externallFbPolygon1: "https://c.animaapp.com/UUPXAe3j/img/polygon-10-17.svg",
  },
};
