import { ComponentMeta, ComponentStory } from '@storybook/react';

import { HowItWork } from '.';

export default {
  title: 'How It Work Section',
  component: HowItWork,
} as ComponentMeta<typeof HowItWork>;

export const Default: ComponentStory<typeof HowItWork> = () => {
  return <HowItWork />;
};
