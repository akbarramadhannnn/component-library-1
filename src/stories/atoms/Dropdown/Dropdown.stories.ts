import type { Meta, StoryObj } from "@storybook/react";

// import { Button } from './Button';
import { Dropdown } from "../../../components/atoms";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Dropdown> = {
  title: "atoms/Dropdown",
  component: Dropdown,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Playgorund: Story = {
  args: {
    value: "",
  },
};
