import type { Meta, StoryObj } from '@storybook/react';
import StyledDropdown from './StyledDropdown';
import { DropdownTypeEnum } from '../../utils/Enums';
import { mockedFiltersMenuItems } from '../../mockData/MockMenuItems';

const meta: Meta<typeof StyledDropdown> = {
    title: 'Components/StyledDropdown',
    component: StyledDropdown,
  };

  type Story = StoryObj<typeof StyledDropdown>;
  
export const Primary: Story = {
  args: {
    dropDownType: DropdownTypeEnum.FiltersDropdown,
    dropdownItems: mockedFiltersMenuItems
  }
};
      
  export default meta;