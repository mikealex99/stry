// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { ActiveButton } from '../src/ActiveButton';

const meta: Meta<typeof ActiveButton> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ActiveButton',
  component: ActiveButton,
  tags: ['autodocs'],
  argTypes:{
    color:{
        control: {
            type: 'color',
            presetColors: ['#ff0000','rgba(255, 255, 255, 0)'],
          },
    },
    background:{
      control: {
          type: 'color',
          presetColors: ['#F06F4A', '#D65631', '#F8BFAF','rgba(255, 255, 255, 0)'],
        },
  },
    outlineColor:{
    control: {
      type: 'color',
      presetColors: ['#ff0000', '#00ff00', '#0000ff'],
    },
  },
  variant: {
    options: ['contained', 'outlined','text'],
    control: { type: 'select' },
  },
  size: {
    options: ['sm', 'md','lg','xlg','2xlg'],
    control: { type: 'select' },
  },
  text:{
    control: 'text',
  },
  greenDot:{
    control: 'boolean',
  }
  }
};

export default meta;
type Story = StoryObj<typeof ActiveButton>;

export const ActivePrimary: Story = {
  args: {
    background: '#D65631',
    text: 'Button CTA',
    color:'white',
    variant: 'contained',
    greenDot:false
  },
};

export const ActiveSecondary: Story = {
    args: {
      background: '#FACFC3',
      text: 'Button CTA',
      color:'#BE4C2B',
      variant: 'contained',
      greenDot:true
    },
    argTypes:{
        background:{
            control: {
                type: 'color',
                presetColors: ['#FACFC3', '#FCDFD7', '#FDEFEB','rgba(255, 255, 255, 0)'],
              },
        },
        color:{
            control: {
                type: 'color',
                presetColors: ['#BE4C2B','#F7AF9B','rgba(255, 255, 255, 0)'],
              },
        },
    }
  };

  export const ActiveTertiary: Story = {
    args: {
      background: 'rgba(255, 255, 255, 0)',
      text: 'Button CTA',
      color:'#344054',
      variant: 'outlined',
      outlineColor:'#D0D5DD',
      greenDot:true
    },
    argTypes:{
        background:{
            control: {
                type: 'color',
                presetColors: ['#F9FAFB', 'rgba(255, 255, 255, 0)'],
              },
        },
        color:{
            control: {
                type: 'color',
                presetColors: ['#D0D5DD','#1D2939','rgba(255, 255, 255, 0)'],
              },
        },
        outlineColor:{
            control: {
              type: 'color',
              presetColors: ['#D0D5DD', '#0000ff'],
            },
          },
    }
  }