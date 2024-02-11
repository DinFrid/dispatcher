import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'Components/Navbar',
    component: Navbar,
  };

  type Story = StoryObj<typeof Navbar>;
  
export const Primary: Story = {
    args: {
     
    }
};
      
  export default meta;