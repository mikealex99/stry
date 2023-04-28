// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { ButtonMat } from '../src/ButtonMat';

const meta: Meta<typeof ButtonMat> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ButtonMat',
  component: ButtonMat,
  argTypes:{
    color:{
        control: {
            type: 'color',
            presetColors: ['#ff0000', '#00ff00', '#0000ff','rgba(255, 255, 255, 0)'],
          },
    },
    background:{
      control: {
          type: 'color',
          presetColors: ['#ff0000', '#00ff00', '#0000ff','rgba(255, 255, 255, 0)'],
        },
  },
  outlineColor:{
    control: {
      type: 'color',
      presetColors: ['#ff0000', '#00ff00', '#0000ff'],
    },
  },
  mainColor:{
    
      options: ['inherit',
       'primary',
       'secondary',
       'success',
       'error',
       'info',
       'warning'],
      control: { type: 'select' },
    
  },
  size: {
    options: ['small', 'medium','large'],
    control: { type: 'select' },
  },
  variant: {
    options: ['contained', 'outlined','text'],
    control: { type: 'select' },
  },
  text:{
    control: 'text',
  }
  }
};

export default meta;
// meta.parameters={
//   design: {
//     type: "figma",
//     url: "https://www.figma.com/file/LbcvMJxDtshDmYtdyfJfkA72/Button-Primary?node-id=0-1&t=6yNZTu8iICrQD6L9-0",
//   },
// }
type Story = StoryObj<typeof ButtonMat>;

export const ExpressButton: Story = {
  args: {
    text: 'ExpresSoft',
  },
};

export const ExpressOutlinedButton: Story = {
  args: {
    text: 'ExpresSoft',
    color:'black',
    variant:'outlined'
  },
};

export const Primary: Story = {
  args: {
    background: '#ff0',
    text: 'ButtonMat',
    color:'red'
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    text: '😄👍😍💯',
  },
};

export const Tertiary: Story = {
  args: {
    ...Primary.args,
    text: '📚📕📈🤓',
  },
};