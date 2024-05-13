import { BaseTabItem } from ".";

export default {
  title: "Components/BaseTabItem",
  component: BaseTabItem,
  argTypes: {
    tab: {
      options: ["unselected", "button-tab-unselected", "selected", "button-tab-selected"],
      control: { type: "select" },
    },
    style: {
      options: ["nunito", "AI-stacked", "AI"],
      control: { type: "select" },
    },
    size: {
      options: ["medium", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    tabLabel: "Tab 2",
    tab: "unselected",
    style: "nunito",
    size: "medium",
    withIcon: true,
    className: {},
    frameClassName: {},
  },
};
