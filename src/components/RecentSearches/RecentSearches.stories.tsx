import type { Meta, StoryObj } from '@storybook/react';
import {RecentSearches} from './RecentSearches';
import { MenuItemTypeEnum } from '../../utils/Enums';

const meta: Meta<typeof RecentSearches> = {
    title: 'Components/RecentSearches',
    component: RecentSearches,
  };

  type Story = StoryObj<typeof RecentSearches>;
  
export const Primary: Story = {
    args: {
        options: [
            { menuItemType : MenuItemTypeEnum.RecentSearchesMenuItem, value: "option1", children: "crypto" },
            { menuItemType : MenuItemTypeEnum.RecentSearchesMenuItem, value: "option2", children: "soccer" },
            { menuItemType : MenuItemTypeEnum.RecentSearchesMenuItem, value: "option3", children: "soccer" }
          ]
    }
};
      
  export default meta;