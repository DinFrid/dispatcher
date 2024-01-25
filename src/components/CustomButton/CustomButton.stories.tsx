import type { Meta, StoryObj } from '@storybook/react';
import CustomButton from './CustomButton';

const meta: Meta<typeof CustomButton> = {
    title: 'Componentss/Button',
    component: CustomButton,
  };

  type Story = StoryObj<typeof CustomButton>;
  
export const Primary: Story = {
    args: {
      children: 'Primary Button',
      styles: { color: 'white', borderRadius: "20px",fontSize: "14px",fontFamily: "Roboto", height: "26px" },
      variant: "contained",
    }
};
      
  export default meta;