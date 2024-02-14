import type { Meta, StoryObj } from '@storybook/react';
import StyledDropdown from './StyledDropdown';
import { DropdownTypeEnum } from '../../utils/Enums';
import { sourceMenuItems } from '../../utils/consts/ConstsMenuItems';

const meta: Meta<typeof StyledDropdown> = {
    title: 'Components/StyledDropdown',
    component: StyledDropdown,
  };

  type Story = StoryObj<typeof StyledDropdown>;
  
export const Primary: Story = {
  args: {
    dropDownType: DropdownTypeEnum.FiltersDropdown,
    dropdownItems: sourceMenuItems
  }
};
      
  export default meta;