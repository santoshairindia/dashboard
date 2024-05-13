import { KpIs } from ".";

export default {
  title: "Components/KpIs",
  component: KpIs,
  argTypes: {
    property1: {
      options: ["rise", "dip-highlight", "dip", "rise-highlight"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "rise",
    className: {},
    ratesComponentText: "Display <br/>click rate",
    overlapClassName: {},
    ratesComponentText1: "Display <br/>click rate",
    ratesComponentDivClassName: {},
    ratesComponentDivClassNameOverride: {},
  },
};
