import type { Meta, StoryObj } from '@storybook/react';
import { MenuItemTypeEnum } from '../../utils/Enums';
import SearchComponent from './SearchComponent';

const meta: Meta<typeof SearchComponent> = {
    title: 'Components/SearchComponent',
    component: SearchComponent,
  };

  const onRemoveClick = (value : string) => {
    console.log("Value removed: {}", value)
  };

  const onClearClick = () => {
    console.log("Clear button clicked!")
  };

  type Story = StoryObj<typeof SearchComponent>;
  
export const Primary: Story = {
    args: {
      recentSearchesProps : {onRemove: onRemoveClick, onClear: onClearClick, options: [
        { menuItemType : MenuItemTypeEnum.RecentSearchesMenuItem, value: "crypto", children: "crypto" },
        { menuItemType : MenuItemTypeEnum.RecentSearchesMenuItem, value: "football", children: "football" },
        { menuItemType : MenuItemTypeEnum.RecentSearchesMenuItem, value: "soccer", children: "soccer" }
      ]}
    }
};
      
  export default meta;