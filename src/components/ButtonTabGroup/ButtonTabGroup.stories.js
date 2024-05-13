import { ButtonTabGroup } from ".";

export default {
  title: "Components/ButtonTabGroup",
  component: ButtonTabGroup,
  argTypes: {
    size: {
      options: ["medium", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    tab4: true,
    tab5: true,
    tab3: true,
    size: "medium",
    withIcon: true,
    className: {},
    baseTabItemTabLabel: "Co-Branded",
    baseTabItemTabLabel1: "CardsPoints",
    baseTabItemTabLabel2: "ConversionCar",
    baseTabItemWithIcon: false,
    baseTabItemTabLabel3: "RentalExperiences",
  },
};
