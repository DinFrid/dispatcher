import type { Meta, StoryObj } from '@storybook/react';
import CustomButton from './CustomButton';

const meta: Meta<typeof CustomButton> = {
    title: 'Components/Button',
    component: CustomButton,
    // ...
  };

  type Story = StoryObj<typeof CustomButton>;
  
export const Primary: Story = {
    args: {
        labelContent: "TestContent",
        labelFont: "TestFont",
        labelSize: 15,
        icon: "TestImgURL"
      }
};
      
  export default meta;