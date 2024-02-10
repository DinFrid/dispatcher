import type { Meta, StoryObj } from '@storybook/react';
import { DropdownTypeEnum, MenuItemTypeEnum } from '../../utils/Enums';
import SearchComponent from './SearchComponent';

const meta: Meta<typeof SearchComponent> = {
    title: 'Components/SearchComponent',
    component: SearchComponent,
  };

  type Story = StoryObj<typeof SearchComponent>;

  const searchMenuOptions = [{value: "Everything", menuItemType : MenuItemTypeEnum.FiltersMenuItem, children: "Everything" },
  {value: "Top Headlines", menuItemType : MenuItemTypeEnum.FiltersMenuItem, children: "Top Headlines" }];
  
export const Primary: Story = {
    args: {
        dropDownProps : {dropDownType : DropdownTypeEnum.RecentSearchesDropdown},
        dropDownOptions: {searchMenuOptions}
    }
};
      
  export default meta;