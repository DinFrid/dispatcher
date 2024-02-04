import type { Meta, StoryObj } from '@storybook/react';
import { StyledMenuItem } from './StyledMenuItem';
import { MenuItemTypeEnum } from '../../utils/Enums';

const meta: Meta<typeof StyledMenuItem> = {
  title: 'Components/StyledMenuItem',
  component: StyledMenuItem,
};

type Story = StoryObj<typeof StyledMenuItem>;

export const Primary: Story = {
  args: {
    value: "option1",
    menuItemType: MenuItemTypeEnum.FiltersMenuItem,
    children: 'MenuItem',
    style:{color:"black", backgroundColor: '#FFF',fontFamily: 'Mulish',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '16px',
    width: '189px',
    height: '28px',
    flexShrink: '0',
    letterSpacing: '0.1px',
}
  }
};
      
export default meta;
