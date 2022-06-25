import { Story, ComponentMeta, ComponentStory } from '@storybook/react';

import { LogoProps } from '~/@types/logo';

import { Logo } from '.';

export default {
  title: 'Logos/Logo',
  component: Logo,
  argTypes: {
    isBlack: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Logo>;

export const Default: ComponentStory<typeof Logo> = (args) => {
  return <Logo {...args} />;
};

export const Black: Story<LogoProps> = Default.bind({});

Black.args = {
  isBlack: true,
};
