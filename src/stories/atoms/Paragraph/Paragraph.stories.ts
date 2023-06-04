import type { Meta, StoryObj } from "@storybook/react";

// import { Button } from './Button';
import { Paragraph } from "../../../components/atoms";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Paragraph> = {
  title: "atoms/Paragraph",
  component: Paragraph,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Playgorund: Story = {
  args: {
    children: "Paragraph",
  },
};
