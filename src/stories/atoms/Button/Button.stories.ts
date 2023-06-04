import type { Meta, StoryObj } from '@storybook/react';

// import { Button } from './Button';
import { Button } from '../../../components/atoms';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export default meta;

type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    label: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary Button',
  },
};
