import type { Meta, StoryObj } from '@storybook/react';
import {RecentSearches} from './RecentSearches';

const meta: Meta<typeof RecentSearches> = {
    title: 'Components/RecentSearches',
    component: RecentSearches,
  };

  type Story = StoryObj<typeof RecentSearches>;
  
export const Primary: Story = {
    args: {
        options: [
            "option1",
            "option2",
            "option3"
          ]
    }
};
      
  export default meta;