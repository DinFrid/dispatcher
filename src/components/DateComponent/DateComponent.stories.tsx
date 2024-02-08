import type { Meta, StoryObj } from '@storybook/react';
import DateComponent from './DateComponent';

const meta: Meta<typeof DateComponent> = {
    title: 'Components/DateComponent',
    component: DateComponent,
  };

  type Story = StoryObj<typeof DateComponent>;
  
export const Primary: Story = {
    args: {
    }
};
      
  export default meta;