// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { CloseButton } from '../src/CloseButton';

const meta: Meta<typeof CloseButton> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'CloseButton',
  component: CloseButton,
  tags: ['autodocs'],
  argTypes:{
    background:{
      control: {
          type: 'color',
          presetColors: ['#F06F4A', '#D65631', '#F8BFAF','rgba(255, 255, 255, 0)'],
        },
  },
  variant: {
    options: ['contained', 'outlined','text'],
    control: { type: 'select' },
  },
  size: {
    options: ['small', 'medium','large'],
    control: { type: 'select' },
  },
  iconColor:    {control: {
    type: 'color',
    presetColors: ['#F38F72', '#F06F4A','#667085','#475467','#667085','#FFFFFF'],
  },}
  }
};

export default meta;
type Story = StoryObj<typeof CloseButton>;

export const CloseButtonPrimaryLight: Story = {
  args: {
    background: 'rgba(255, 255, 255, 0)',
    variant: 'text',
    iconColor:'#F38F72'
  },
};

export const CloseButtonGrayLight: Story = {
    args: {
      background: 'rgba(255, 255, 255, 0)',
      variant: 'text',
      iconColor:'#667085'
    },
  };
