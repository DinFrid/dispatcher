import type { Meta, StoryObj } from '@storybook/react';
import StyledDropdown from './StyledDropdown';
import { StyledMenuItem } from '../StyledMenuItem/StyledMenuItem';
import { StyledFiltersMenuItem } from './StyledFiltersMenuItem';


const meta: Meta<typeof StyledDropdown> = {
    title: 'Components/StyledDropdown',
    component: StyledDropdown,
  };

  type Story = StoryObj<typeof StyledDropdown>;
  
export const Primary: Story = {
    args: {
      children: <StyledMenuItem StyledComponent={StyledFiltersMenuItem} value="1" >Mako</StyledMenuItem>,
      sx: { color: 'white', borderRadius: "20px",fontSize: "14px",fontFamily: "Roboto", height: "26px" },
    }
};
      
  export default meta;