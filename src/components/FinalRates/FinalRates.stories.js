import { FinalRates } from ".";

export default {
  title: "Components/FinalRates",
  component: FinalRates,
  argTypes: {
    property1: {
      options: ["dip", "rise", "dip-h30", "rise-h30", "dip-h-30", "rise-h-30"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    rise: true,
    property1: "dip",
    className: {},
    overlapClassName: {},
    ratesComponentText: "2.0 M",
    ratesComponentText1: "29%",
    ratesComponentText2: "Display <br/>click rate",
    ratesComponentText3: "2.0 M",
    ratesComponentPolygon: "https://c.animaapp.com/UUPXAe3j/img/polygon-10-6.svg",
    ratesComponentText4: "29%",
  },
};
