// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { ButtonO } from '../src/ButtonO';
import React from 'react';

const meta: Meta<typeof ButtonO> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ButtonO',
  component: ButtonO,
  argTypes:{
    color:{
        control: {
            type: 'color',
            presetColors: ['#D65631','rgba(255, 255, 255, 0)'],
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
      presetColors: ['#D65631', '#00ff00', '#0000ff'],
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
  }
  }
};

export default meta;
type Story = StoryObj<typeof ButtonO>;

export const PrimaryB: Story = {
  args: {
    background: '#D65631',
    text: 'Button CTA',
    color:'white',
    variant: 'contained'
  },
};

export const SecondaryB: Story = {
    args: {
      background: '#FACFC3',
      text: 'Button CTA',
      variant: 'contained'
    },
    argTypes:{
        background:{
          control: {
              type: 'color',
              presetColors: ['#FACFC3', '#FCDFD7', '#FDEFEB','rgba(255, 255, 255, 0)'],
            },
      },
    }
  };

  export const TertiaryB: Story = {
    args: {
      text: 'Button CTA',
      variant: 'outlined',
      outlineColor:'#D0D5DD',
      color:'#344054'
    },
    argTypes:{
        background:{
          control: {
              type: 'color',
              presetColors: ['#F9FAFB','#EAECF0','rgba(255, 255, 255, 0)'],
            },
      },
    }
  };