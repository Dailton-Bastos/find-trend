import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Trends } from '.';

export default {
  title: 'All Trends Section',
  component: Trends,
} as ComponentMeta<typeof Trends>;

export const Default: ComponentStory<typeof Trends> = () => {
  return <Trends />;
};
