import type { Meta, StoryObj } from '@storybook/react';

// import { Button } from './Button';
import { Input } from '../../../components/atoms';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Input> = {
  title: 'atoms/Input',
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Playgorund: Story = {
  args: {
    label: "Input Label",
  },
};
