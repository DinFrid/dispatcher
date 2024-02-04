import type { Meta, StoryObj } from '@storybook/react';
import StyledDropdown from './StyledDropdown';
import { StyledMenuItem } from '../StyledMenuItem/StyledMenuItem';
import { DropdownTypeEnum, MenuItemTypeEnum } from '../../utils/Enums';

const meta: Meta<typeof StyledDropdown> = {
    title: 'Components/StyledDropdown',
    component: StyledDropdown,
  };

  type Story = StoryObj<typeof StyledDropdown>;
  
export const Primary: Story = {
  args: {
    dropDownType: DropdownTypeEnum.FiltersDropdown,
    children: (
      <>
        <StyledMenuItem menuItemType ={MenuItemTypeEnum.FiltersMenuItem } value='1'>Option1</StyledMenuItem>
        <StyledMenuItem menuItemType ={MenuItemTypeEnum.FiltersMenuItem } value='2'>Option2</StyledMenuItem>
        <StyledMenuItem menuItemType ={MenuItemTypeEnum.FiltersMenuItem } value='3'>Option3</StyledMenuItem>
        <StyledMenuItem menuItemType ={MenuItemTypeEnum.FiltersMenuItem } value='4'>Option4</StyledMenuItem>
        <StyledMenuItem menuItemType ={MenuItemTypeEnum.FiltersMenuItem } value='5'>Option5</StyledMenuItem>
      </>
    ),
  }
};
      
  export default meta;