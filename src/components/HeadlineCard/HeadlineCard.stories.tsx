import type { Meta, StoryObj } from '@storybook/react';
import HeadlineCard from './HeadlineCard';

const meta: Meta<typeof HeadlineCard> = {
    title: 'Components/HeadlineCard',
    component: HeadlineCard,
  };

  type Story = StoryObj<typeof HeadlineCard>;
  
export const Primary: Story = {
    args: {
        url: 'https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2021/07/uriah-hall-sean-strickland-ufc-on-espn-28-official-weigh-ins-5.jpg?w=1000&h=600&crop=1',
        date: 'Friday Jun 25, 2021',
        title: 'Turkey: Foreign tourists evacuated as wildfires threaten resorts - BBC News',
        source: 'BBC News',
        content: 'A helicopter is deployed against a fire near Marmaris in south-western Turkey\r\nTourists have been evacuated from beaches in south-western Turkey, where raging wildfires are now threateni… [+1829 chars]'
    }
};
      
  export default meta;