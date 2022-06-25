import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Header } from '.';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = () => {
  return <Header />;
};
