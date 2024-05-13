import { BaseExtras } from ".";

export default {
  title: "Components/BaseExtras",
  component: BaseExtras,
  argTypes: {
    type: {
      options: ["more-menu", "spacer", "separator"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showSeparator: true,
    type: "more-menu",
    className: {},
  },
};
