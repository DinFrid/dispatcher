import type { Meta, StoryObj } from '@storybook/react';
import { StyledButton } from './StyledButton';

const meta: Meta<typeof StyledButton> = {
    title: 'Components/StyledButton',
    component: StyledButton,
  };

  type Story = StoryObj<typeof StyledButton>;
  
export const Primary: Story = {
    args: {
      children: 'Primary Button',
      sx: { color: 'white', borderRadius: "20px",fontSize: "14px",fontFamily: "Roboto", height: "26px" },
      variant: "contained"
    }
};
      
  export default meta;