import { InputField } from ".";

export default {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    inputType: {
      options: ["dropdown", "phone-number", "area-text", "text-box"],
      control: { type: "select" },
    },
    device: {
      options: ["web"],
      control: { type: "select" },
    },
    state: {
      options: ["filled", "hovered", "empty", "focused-active", "error", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    wordLimit: true,
    additionalInfo: false,
    mandatoryField: false,
    helperText: false,
    leftIcon: false,
    inputType: "dropdown",
    device: "web",
    state: "filled",
    labelClassName: {},
    text: "Dropdown Label",
    text1: "Select",
  },
};
