import { Gap } from ".";

export default {
  title: "Components/Gap",
  component: Gap,
  argTypes: {
    state: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "default",
    className: {},
    overlapClassName: {},
    text: "03.0 sec",
  },
};
