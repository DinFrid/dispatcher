import type { Meta, StoryObj } from '@storybook/react';
import {RecentSearches} from './RecentSearches';
import { StyledRecentSearchesMenuItem } from './StyledRecentSearchesMenuItem';

const meta: Meta<typeof RecentSearches> = {
    title: 'Components/RecentSearches',
    component: RecentSearches,
  };

  type Story = StoryObj<typeof RecentSearches>;
  
export const Primary: Story = {
    args: {
        options: [
            { StyledComponent: StyledRecentSearchesMenuItem, value: "option1", children: "crypto" },
            { StyledComponent: StyledRecentSearchesMenuItem, value: "option2", children: "soccer" },
            { StyledComponent: StyledRecentSearchesMenuItem, value: "option3", children: "soccer" }
          ]
    }
};
      
  export default meta;