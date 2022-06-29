import { ComponentMeta, ComponentStory } from '@storybook/react';

import { About } from '.';

export default {
  title: 'About Section',
  component: About,
} as ComponentMeta<typeof About>;

export const Default: ComponentStory<typeof About> = () => {
  return <About />;
};
